import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import CartItem from "../components/cartItem";
import { ShopContext } from "../context/ShopContext";
import { Products } from "../Database/Product";
function Cart({ data, removeItem }) {
  const { cartItems } = useContext(ShopContext);
  return (
    <Container>
      <p>{JSON.stringify(cartItems)}</p>
      {Products.map((item) => {
        if (cartItems[item.id] !== 0) {
          return <CartItem data={item} />;
        }
      })}
    </Container>
  );
}

export default Cart;
