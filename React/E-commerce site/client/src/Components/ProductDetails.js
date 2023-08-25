import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { FaShoppingCart } from "react-icons/fa";

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
          <div className="prod-img w-50 my-auto ms-3">
            <img
              src={product.image}
              alt="Product image"
              className="mx-5"
              style={{ height: "400px", width: "400px" }}
            />
          </div>
          <div className="prod-detail w-50 my-auto">
            <h2 className="text-start">{product.title}</h2>
            <p className="text-secondary">{`Category : ${product.category}`}</p>
            <h4 className="text-success">{`$.${product.price}`}</h4>
            <p>{product.description}</p>
            <i>
              <Rating rate={product.rating.rate} id={id} />
            </i>
            <button className="btn btn-warning mt-3">
              Add to Cart <FaShoppingCart />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
