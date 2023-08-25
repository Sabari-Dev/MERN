import React, { useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { cartReducer, productsReducer } from "./reducers";
import axios from "axios";

const Cart = createContext();
const Context = ({ children }) => {
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
  //   console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productsState, productsDispatch] = useReducer(productsReducer, {
    byStock: false,
    byQuickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productsState, productsDispatch }}>
      {children}
    </Cart.Provider>
  );
};
export const CartState = () => {
  return useContext(Cart);
};
export default Context;
