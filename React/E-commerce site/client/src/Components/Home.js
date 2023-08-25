import React, { useEffect, useState } from "react";
import axios from "axios";
import NavPage from "./NavPage";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/s1/products")
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="home-page">
        <NavPage />
      </div>
      <div className="products d-flex flex-wrap gap-3 mt-3 container-fluid">
        {products.map((product) => {
          return <Products product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
