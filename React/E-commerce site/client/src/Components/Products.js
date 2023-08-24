import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = ({ product }) => {
  const navigate = useNavigate();

  const getId = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Card
      style={{ width: "18rem" }}
      key={product._id}
      className="p-2 text-center"
      onClick={() => getId(product._id)}
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
