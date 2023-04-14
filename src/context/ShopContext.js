import React, { createContext, useContext, useState } from "react";
//create context
import { Products } from "../Database/Product";
export const ShopContext = createContext();
// {1:0,2:0,3:0}
const initialCartState = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(initialCartState);
  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    // setCartItems(({1:0,2:0,3:1,4:0 })=>({...prev, [productId]:prev[productId]+1}))
    console.log(cartItems);
  };
  const removeItemFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };
  const addItemsToCart = (quantity, productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: quantity }));
  };
  const shopContextValue = {
    cartItems,
    addToCart,
    removeItemFromCart,
    addItemsToCart,
  };
  return (
    <ShopContext.Provider value={shopContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
