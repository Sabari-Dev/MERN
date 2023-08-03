import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });
    try {
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        await createUserWithEmailAndPassword(auth, user.email, user.password)
          .then((userCredential) => {
            const userId = userCredential.user.uid;
            console.log(userId);
            setDoc(doc(db, "users", userId), {
              ...user,
              createdAt: Timestamp.fromDate(new Date()),
            });
          })
          .catch((error) => {
            console.log(error);
          });
        setUser({
          name: "",
          email: "",
          dateOfBirth: "",
          password: "",
          confirmPassword: "",
          loading: false,
        });
        setErrors({});
        alert("user created successfully");
        navigate("/");
      } else {
        setErrors(validationErrors);
      }
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const validateForm = () => {
    let validationErrors = {};
    if (!user.name) {
      validationErrors.name = `Name required *`;
    }
    if (!user.dateOfBirth) {
      validationErrors.dateOfBirth = "Date of birth required *";
    }
    if (!user.email) {
      validationErrors.email = `email required *`;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
    ) {
      validationErrors.email = `Email is invalid *`;
    }
    if (!user.password) {
      validationErrors.password = `Enter password`;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(user.password)) {
      validationErrors.password = `At least 8 characters long,
Contains at least one uppercase letter,
Contains at least one lowercase letter,
Contains at least one digit,
Allows special characters`;
    }
    if (!user.confirmPassword) {
      validationErrors.confirmPassword = `Enter confirm password`;
    } else if (user.password !== user.confirmPassword) {
      validationErrors.confirmPassword = `Password and confirm Password not same `;
    }
    return validationErrors;
  };
  return (
    <div className="register">
      <form action="#" onSubmit={handleSubmit}>
        <h2 className="heading">Create new account</h2>
        <p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name..."
            onChange={handleChange}
            value={user.name}
          />
        </p>
        {errors.name && <p className="message">{errors.name}</p>}
        <p>
          <input
            type="date"
            name="dateOfBirth"
            id="dob"
            onChange={handleChange}
            value={user.dateOfBirth}
          />
        </p>
        {errors.dateOfBirth && <p className="message">{errors.dateOfBirth}</p>}
        <p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            onChange={handleChange}
            value={user.email}
          />
        </p>
        {errors.email && <p className="message">{errors.email}</p>}
        <p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </p>
        {errors.password && <p className="message">{errors.password}</p>}
        <p>
          <input
            type="password"
            name="confirmPassword"
            id="CPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.confirmPassword}
          />
        </p>
        {errors.confirmPassword && (
          <p className="message">{errors.confirmPassword}</p>
        )}
        <p className="routeLink">
          Already have account then.click to
          <Link to="/"> Login Page</Link>
        </p>
        <button type="submit">
          {user.loading ? "please wait..." : "Create an account"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
