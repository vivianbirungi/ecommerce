import React from "react";
import { Col, Row } from "react-bootstrap";

export default function CartItem({ data }) {
  const { id, productImage, price, productName, category } = data;
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
    </div>
  );
}
