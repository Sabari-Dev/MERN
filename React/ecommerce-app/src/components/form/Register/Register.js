import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./register.css";
import { Link } from "react-router-dom";
import { db } from "../../../Config/Config";
import { addDoc, collection } from "firebase/firestore";

// import FileBase64 from "react-file-base64";

const Register = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [errors, setErrors] = useState({});
  const allStates = [
    "Choose...",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];
  const [selectedState, setSelectedState] = useState(formFields.state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // console.log(formFields);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length === 0) {
        console.log("Form submitted:", formFields);
        await addDoc(collection(db, "Users"), { ...formFields });
        alert("user creator successfully");
        window.location.href = "/signIn";
        setErrors({});
      } else {
        setErrors(validationErrors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validateForm = () => {
    let validationErrors = {};
    // validation
    if (!formFields.firstName) {
      validationErrors.firstName = `first Name required *`;
    }
    if (!formFields.lastName) {
      validationErrors.lastName = `last Name required *`;
    }
    if (!formFields.email) {
      validationErrors.email = `email required *`;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formFields.email)
    ) {
      validationErrors.email = `Email is invalid *`;
    }
    if (!formFields.password) {
      validationErrors.password = `Enter password`;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formFields.password)
    ) {
      validationErrors.password = `At least 8 characters long,
Contains at least one uppercase letter,
Contains at least one lowercase letter,
Contains at least one digit,
Allows special characters`;
    }
    if (!formFields.confirmPassword) {
      validationErrors.confirmPassword = `Enter confirm password`;
    } else if (formFields.password !== formFields.confirmPassword) {
      validationErrors.confirmPassword = `Password and confirm Password not same `;
    }
    if (formFields.gender === "") {
      validationErrors.gender = `select gender`;
    }
    if (!formFields.address) {
      validationErrors.address = `Address required`;
    }
    if (!formFields.city) {
      validationErrors.city = `city required`;
    }
    if (formFields.state === "") {
      validationErrors.state = `State required`;
    }
    if (!formFields.zipcode) {
      validationErrors.zipcode = `zipcode required `;
    } else if (formFields.zipcode.trim().length !== 6) {
      validationErrors.zipcode = `zipcode must 6 character only`;
    }
    return validationErrors;
  };

  return (
    <div className="reg-form w-50">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">SignUp</h1>
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First name"
              name="firstName"
              value={formFields.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="message text-danger">{errors.firstName}</p>
            )}
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              value={formFields.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="message text-danger">{errors.lastName}</p>
            )}
          </Col>
        </Row>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="message text-danger">{errors.email}</p>
          )}
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formFields.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="message text-danger">{errors.password}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formFields.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="message text-danger">{errors.confirmPassword}</p>
            )}
          </Form.Group>
        </Row>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={2}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                id="formHorizontalRadios1"
                onChange={handleChange}
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                id="formHorizontalRadios2"
                onChange={handleChange}
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="others"
                name="gender"
                value="other"
                id="formHorizontalRadios3"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          {errors.gender && (
            <p className="message text-danger">{errors.gender}</p>
          )}
        </fieldset>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formFields.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="message text-danger">{errors.address}</p>
          )}
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={formFields.city}
              onChange={handleChange}
            />
            {errors.city && (
              <p className="message text-danger">{errors.city}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue={formFields.state}
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {allStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Form.Select>
            {errors.state && (
              <p className="message text-danger">{errors.state}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zipcode"
              value={formFields.zipcode}
              onChange={handleChange}
            />
            {errors.zipcode && (
              <p className="message text-danger">{errors.zipcode}</p>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree and continue."
            name="checkIn"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Already have account.<Link to="/signIn">Click here.</Link>
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
