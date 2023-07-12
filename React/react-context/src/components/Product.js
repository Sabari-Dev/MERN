import React from "react";
import { ContextData } from "../Context/ProductData";

const Product = ({ products }) => {
  console.log(ContextData());
  console.log(ContextData().products);
  return <div>Product</div>;
};

export default Product;
