import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/s1/products/product/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(product);
  return (
    <div>
      {loading ? (
        <p className="text-center loading">loading...</p>
      ) : (
        <div className="product-view container w-100 mt-2 d-flex border border-3">
          <div className="prod-img w-50 ">
            <img
              src={product.image}
              alt="Product image"
              style={{ height: "450px", width: "450px" }}
            />
          </div>
          <div className="prod-detail w-50">
            <h4>{product.title}</h4>
            <h6>{product.price}</h6>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
