import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    loading: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUser({ ...user, loading: true });
    console.log(user);
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <h3>Create Account</h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3 w-75"
      >
        <Form.Control
          type="text"
          placeholder="Sam"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 w-75"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3 w-75"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </FloatingLabel>
      <Form.Select
        aria-label="Default select example"
        className="w-75 mb-3"
        name="gender"
        value={user.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Form.Select>
      <FloatingLabel
        controlId="floatingInput"
        label="Date of birth"
        className="mb-3 w-75"
      >
        <Form.Control
          type="date"
          placeholder="02-02-2000"
          name="dateOfBirth"
          value={user.dateOfBirth}
          onChange={handleChange}
        />
      </FloatingLabel>

      <button>
        {user.loading ? <Spinner animation="border" /> : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUp;
