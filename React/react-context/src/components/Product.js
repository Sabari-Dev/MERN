import React from "react";
import { ContextData } from "../Context/ProductData";
import "animate.css";

const Product = ({ products }) => {
  console.log(ContextData());
  console.log(ContextData().products);
  return (
    <div>
      <h1 className="animate__animated animate__zoomInRight">product</h1>
    </div>
  );
};

export default Product;
