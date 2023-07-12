import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../Config/Config";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((newUsers) => {
        addDoc(collection(db, "User"), {
          ...newUser,
        });
        alert("User added ");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container w-50">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center ">Sign Up</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="User Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="John"
            name="userName"
            value={newUser.userName}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            autoComplete="false"
          />
          <br />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Confirm Password">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleChange}
            autoComplete="false"
          />
        </FloatingLabel>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
