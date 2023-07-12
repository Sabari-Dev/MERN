import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { SiTrustedshops } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { CartState } from "./Context/Context";

const Header = () => {
  // console.log(CartState());
  const {
    state: { cart },
  } = CartState();
  console.log(cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <SiTrustedshops />
          -Shop
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Container>
      <Dropdown drop="start">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FaShoppingCart /> <Badge bg="secondary">{cart.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default Header;
