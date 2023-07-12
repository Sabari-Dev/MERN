import React from "react";
import { CartState } from "./Context/Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

const ProductView = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <Row>
      {products.map((product) => {
        return (
          <Col key={product.id} md={4} className="g-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                height={"150px"}
                width={"150px"}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{`Price:₹${product.price.split(".")[0]}`}</Card.Text>
                <Card.Text>Rating: {product.ratings}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductView;
