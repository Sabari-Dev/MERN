import React, { useState, useEffect } from "react";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../Config/Config";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Profile = () => {
  const url = window.location.pathname;
  const userId = url.substring(url.lastIndexOf("/") + 1);
  console.log(userId);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    gender: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState([userDetails]);
  const allStates = [
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
  const [selectedState, setSelectedState] = useState(userDetails.state);
  useEffect(() => {
    const createNewUser = async () => {
      const currentUser = await getDocs(collection(db, "Users"));
      const userArr = currentUser.docs.map((doc) => {
        const {
          firstName,
          lastName,
          email,
          address,
          gender,
          city,
          state,
          zipcode,
        } = doc.data();
        return {
          firstName,
          lastName,
          email,
          gender,
          address,
          city,
          state,
          zipcode,
          id: doc.id,
        };
      });
      const findUserValue = userArr.find(
        (userValue) => userValue.id === userId
      );
      setUserDetails(findUserValue);
    };
    createNewUser();
  }, [userId]);
  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);
  // const handleGenderChange = (selectedGender) => {
  //   setUserDetails((prevUserDetails) => ({
  //     ...prevUserDetails,
  //     gender: selectedGender,
  //   }));
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleRemainder = async () => {
    setSelectedState(updateUserDetails.state);
    try {
      if (window.confirm("Are you sure to update the user details?")) {
        const updateUserDetailsRef = doc(db, "Users", userId);
        await updateDoc(updateUserDetailsRef, {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
          address: userDetails.address,
          gender: userDetails.gender,
          city: userDetails.city,
          state: userDetails.state,
          zipcode: userDetails.zipcode,
        });
        setUpdateUserDetails(updateUserDetailsRef);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>{userDetails.firstName}'s Profile</h2>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                name="firstName"
                value={userDetails.firstName}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                name="lastName"
                value={userDetails.lastName}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userDetails.email}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={userDetails.address}
              disabled={!editMode}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={userDetails.city}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue={userDetails.state}
                value={selectedState}
                onChange={handleInputChange}
                disabled={!editMode}
              >
                {allStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                value={userDetails.zipcode}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" onClick={() => setEditMode(!editMode)}>
            edit
          </Button>
          <Button
            className="ms-2"
            variant="outline-success"
            onClick={handleRemainder}
            disabled={!editMode}
          >
            save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
