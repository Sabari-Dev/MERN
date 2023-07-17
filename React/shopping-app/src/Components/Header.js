import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { SiTrustedshops } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import { CartState } from "./Context/Context";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Home from "./Home";

const Header = () => {
  // console.log(CartState());
  const {
    state: { products, cart },
    dispatch,
    productsState,
    productsDispatch,
  } = CartState();
  console.log(cart);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="text-success">
            <SiTrustedshops />
            -Shop
          </Navbar.Brand>
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 w-100"
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

          <Dropdown.Menu style={{ width: "450px" }}>
            {cart.map((val) => {
              return (
                <Card className="p-2">
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Img variant="top" src={val.image} />
                      </Col>
                      <Col>
                        <Card.Text>{val.name}</Card.Text>
                        <Card.Text>{val.price}</Card.Text>
                      </Col>
                      <Col>
                        <Button
                          variant="danger"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: val,
                            })
                          }
                        >
                          <MdDeleteForever />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="outline-success" className="mx-3 px-">
          SignUp
        </Button>
      </Navbar>
      <Home />
    </>
  );
};

export default Header;
