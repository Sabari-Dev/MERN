import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Config/Config";

const SignIn = () => {
  const [verification, setVerification] = useState([]);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [isValidUser, setIsValidUser] = useState(false);
  useEffect(() => {
    const getEmailPassword = async () => {
      const emailPasswordRespond = await getDocs(collection(db, "Users"));
      const userValue = emailPasswordRespond.docs.map((doc) => {
        const { email, password } = doc.data();

        return { email, password, id: doc.id };
      });
      setVerification(userValue);
      console.log(userValue);
    };
    getEmailPassword();
  }, []);
  useEffect(() => {
    const { email, password } = userInput;

    const isValid = verification.some(
      (user) => user.email === email && user.password === password
    );
    setIsValidUser(isValid);
  }, [verification, userInput]);

  const handleInputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValidUser) {
      alert("Login successfully");
      const validatedUser = verification.find(
        (user) =>
          user.email === userInput.email && user.password === userInput.password
      );
      const userId = validatedUser.id;
      window.location.href = `/user/${userId}`;
    } else {
      alert("Enter valid Email/Password.");
    }
  };

  return (
    <div className="sign-page w-50">
      <Form onSubmit={handleFormSubmit}>
        <h2 className="text-center">Sign In </h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userInput.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Don't have account.<Link to="/">Click here.</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
