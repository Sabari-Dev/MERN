import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = ({ product }) => {
  //   console.log(products);
  return (
    <Card
      style={{ width: "18rem" }}
      key={product.id}
      className="p-2 text-center"
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", width: "200px" }}
        className="m-auto"
      />
      <Card.Body>
        <Card.Title>{product.title.substring(0, 15)}...</Card.Title>
        <Card.Text className="py-3">{`$ ${product.price}`}</Card.Text>
        <Button variant="primary" className="m-auto">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Products;
