import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function CartItem({ data, removeItem }) {
  const { id, productImage, price, productName, category } = data;
  const removeFromCart = () => {
    removeItem(id);
  };
  return (
    <div>
      <Row>
        <Col>
          {/* //image */}
          <img src={productImage} width={50} height={50} />
        </Col>
        <Col>
          <p>{productName}</p>
          <p>{category}</p>
        </Col>
        <Col>{price}</Col>
      </Row>
      <Button onClick={removeFromCart}>Remove Item</Button>
    </div>
  );
}
