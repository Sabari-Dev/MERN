import React from "react";
import NavPage from "./NavPage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "./data.js";
import Products from "./Products";

const Home = () => {
  // console.log(products);
  return (
    <>
      <div className="home-page">
        <NavPage />
      </div>
      <div className="products d-flex flex-wrap gap-2 mt-3 container-fluid">
        {products[0].map((product) => {
          return <Products product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
