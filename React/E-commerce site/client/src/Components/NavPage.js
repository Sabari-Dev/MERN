import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import logo from "../images/logoE.png";
import FileBase64 from "react-file-base64";
import { BsFillCameraFill } from "react-icons/bs";

const NavPage = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(true);
  const [editUser, setEditUser] = useState();
  const handleClose = () => {
    setShow(false);
    setEditing(false);
  };
  const handleShow = () => {
    setShow(true);
    viewProfile();
  };
  const { id } = useParams();
  // console.log(id);
  const viewProfile = async () => {
    await axios
      .get(`http://localhost:5000/api/s1/users/${id}`)
      .then((users) => {
        setUser(users.data.user);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  // console.log(user);
  // console.log(user.fileUpload);
  const onEdit = () => {
    setEditing(!editing);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ height: "15vh" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" style={{ height: "150px", width: "170px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            type="search"
            placeholder="Search products"
            className="me-2 ms-3 w-50"
            aria-label="Search"
          />

          <Button variant="outline-success">Search</Button>
          <Nav
            className="ms-auto my-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              variant="primary"
              onClick={handleShow}
              className="my-3 mx-3 h-25"
            >
              {/* {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="img"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                  }}
                  className="me-2"
                />
              ) : null} */}
              profile
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title className="m-auto ps-5">Profile </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <Form className="text-start p-2 ">
                    <Form.Group
                      controlId="formFile"
                      className="mb-3 w-100 d-flex justify-content-between"
                    >
                      <div className="img-page ">
                        <img
                          src={user.avatar}
                          alt="avatar"
                          style={{
                            height: "150px",
                            width: "150px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="upload my-auto ms-3">
                        <Form.Label htmlFor="img">Upload Profile:</Form.Label>
                        <br />
                        <FileBase64
                          type="file"
                          name="avatar"
                          accept="image/*"
                          id="img"
                          style={{ display: "none" }}
                          value={user.avatar}
                          onDone={({ base64 }) =>
                            setUser((prevVal) => {
                              return { ...prevVal, avatar: base64 };
                            })
                          }
                        />
                      </div>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formGroupName"
                    >
                      <Form.Label>Name :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={user.name}
                        disabled={editing}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formGroupEmail"
                    >
                      <Form.Label>Email :</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={user.email}
                        disabled={editing}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formGroupPassword"
                    >
                      <Form.Label>Password :</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        disabled={editing}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formGroupGender"
                    >
                      <Form.Label>Gender :</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        className="w-75 mb-3"
                        name="gender"
                        value={user.gender}
                        disabled={editing}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formGroupDob">
                      <Form.Label>Date Of Birth :</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="02-02-2000"
                        name="dateOfBirth"
                        value={user.dateOfBirth}
                        disabled={editing}
                      />
                    </Form.Group>
                  </Form>
                )}
              </Modal.Body>
              <Modal.Footer className="p-1">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {editing ? (
                  <Button variant="primary" onClick={onEdit}>
                    Edit
                  </Button>
                ) : (
                  <Button variant="success" onClick={onEdit}>
                    save
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
            <NavDropdown
              title="Cart"
              id="navbarScrollingDropdown"
              className="me-2"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPage;
