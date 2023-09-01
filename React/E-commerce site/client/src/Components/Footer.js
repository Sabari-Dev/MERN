import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container fluid>
        <Row>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: contact@happyshop.com</p>
            <p>Phone: +91-98400-98400</p>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Accessories </a>
              </li>
              <li>
                <a href="#">Jewels</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light">
                <i className="">
                  <BiLogoFacebookSquare />
                </i>
              </a>
              <a href="#" className="text-light">
                <i className="">
                  <BiLogoTwitter />
                </i>
              </a>
              <a href="#" className="text-light">
                <i className="">
                  <BiLogoInstagram />
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
