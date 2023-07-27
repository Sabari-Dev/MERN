import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import elogo from "./images/elogo.png";
import Carousel from "react-bootstrap/Carousel";
import poster1 from "./images/poster1.jpg";
import poster2 from "./images/poster2.jpg";
import Modal from "react-bootstrap/Modal";

const NavPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary py-1">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={elogo}
              alt="logo"
              style={{ height: "80px", width: "200px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex gap-2">
              <>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              <>
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title> heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel data-bs-theme="light" className="banner">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={poster1}
            alt="First slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={poster2}
            alt="Second slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={poster1}
            alt="Third slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default NavPage;
