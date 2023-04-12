import React from "react";
import { Container } from "react-bootstrap";
import CartItem from "../components/cartItem";

function Cart({ data }) {
  return (
    <Container>
      {data.map((item) => (
        <CartItem data={item} />
      ))}
    </Container>
  );
}

export default Cart;
