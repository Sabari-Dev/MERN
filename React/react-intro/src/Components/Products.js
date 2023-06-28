import { websiteName, websiteDescription, products } from "./data";
import { useState } from "react";

let Products = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  function addToCart(product) {
    setCart((cart) => [...cart, product]);
  }

  return (
    <>
      <header>
        <h1>
          <i className="bi bi-cart3"></i>
          {websiteName}
        </h1>
        <div className="views">
          <div className="cart-page bg-primary py-2 px-4 my-3 me-4">
            <i className="bi bi-cart4 px-2"></i>
            <span className="cart-count">3</span>
          </div>
          <div className="fav-page bg-danger py-2 px-4 my-3">
            <i className="bi bi-heart-fill px-2"></i>
            <span className="fav-count">3</span>
          </div>
        </div>
      </header>
      <div className="products">
        <p className="des">{websiteDescription} </p>
        <div className="row">
          {products.map((product, index) => (
            <div className="product col-3 " key={index + 1}>
              <img src={product.image} alt={product.title} />
              <div className="content">
                <p className="title">{product.title}</p>
                <p className="price">€.{product.price}</p>
                {/* <p>
                <span>category:</span>
                {product.category}
              </p>
              <p>
                <span>description:</span>
                {product.description}
              </p>
              <p>
                <span>Rating :</span> rate:{product.rating.rate},count:
                {product.rating.count}
              </p> */}
                <button
                  className="btn btn-primary cart"
                  onClick={() => addToCart(product)}
                >
                  Add to cart <i className="bi bi-cart3"></i>
                </button>
                <button className="btn btn-danger favorite">
                  Add Favorite <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
