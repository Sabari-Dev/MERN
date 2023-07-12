import React, { useEffect, useState } from "react";
import { useContext, createContext } from "react";
const Cart = createContext();
const ProductData = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);
  return (
    <div>
      <Cart.Provider value={{ products, setProducts }}>
        {children}
      </Cart.Provider>
    </div>
  );
};
export const ContextData = () => {
  return useContext(Cart);
};
export default ProductData;
