import React from "react";
import { Products } from "../Database/Product";
import Product from "../components/Product";
import { Container } from "react-bootstrap";
function Shop() {
  return (
    <Container>
      {Products.map((item) => (
        <Product data={item} />
      ))}
    </Container>
  );
}

export default Shop;
