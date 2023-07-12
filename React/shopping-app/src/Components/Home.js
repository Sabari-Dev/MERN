import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filter from "./Filter";
import ProductView from "./ProductView";

const Home = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <Filter />
        </Col>
        <Col md={9}>
          <ProductView />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
