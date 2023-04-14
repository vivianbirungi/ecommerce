import React from "react";
import { Container } from "react-bootstrap";
import CartItem from "../components/cartItem";

function Cart({ data, removeItem }) {
  return (
    <Container>
      {data.map((item) => (
        <CartItem data={item} removeItem={removeItem} />
      ))}
    </Container>
  );
}

export default Cart;
