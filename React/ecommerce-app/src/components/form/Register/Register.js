import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./register.css";
import { Link } from "react-router-dom";
import firebase from "../../Config";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.database().ref("fromFields").push(formFields);
    console.log(formFields);
    window.location.href = "/signIn";
  };
  return (
    <div className="reg-form w-50">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">Register Form</h1>
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First name"
              name="firstName"
              value={formFields.firstName}
              onChange={handleChange}
            />
            <p className="message"></p>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="lastName"
              value={formFields.lastName}
              onChange={handleChange}
            />
            <p className="message"></p>
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
          <p className="message"></p>
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
            <p className="message"></p>
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
            <p className="message"></p>
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
          <p className="message"></p>
        </fieldset>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={formFields.address}
            onChange={handleChange}
          />
          <p className="message"></p>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              value={formFields.city}
              onChange={handleChange}
            />
            <p className="message"></p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>{" "}
            </Form.Select>
            <p className="message"></p>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zipcode"
              value={formFields.zipcode}
              onChange={handleChange}
            />
            <p className="message"></p>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree and continue."
            name="checkIn"
            value={formFields.checkIn}
            onChange={handleChange}
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
