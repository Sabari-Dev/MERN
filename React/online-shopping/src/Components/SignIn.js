import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const SignIn = () => {
  return (
    <form action="#">
      <h3>Sign in</h3>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 w-75"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3 w-75"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <button>Sign In</button>
    </form>
  );
};

export default SignIn;
