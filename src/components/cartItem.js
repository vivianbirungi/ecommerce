import React, { useContext } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../context/ShopContext";

export default function CartItem({ data }) {
  const { id, productImage, price, productName, category } = data;
  const { cartItems, removeItemFromCart, addToCart, addItemsToCart } =
    useContext(ShopContext);
  const itemsQuantity = cartItems[id];
  return (
    <Card>
      <Row>
        <Col>
          {/* //image */}
          <img src={productImage} width={200} height={150} />
        </Col>
        <Col>
          {" "}
          <p>{productName}</p>
          <p>{category}</p>
          <Button onClick={() => removeItemFromCart(id)}>-</Button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => addItemsToCart(e.target.value, id)}
          />
          <Button onClick={() => addToCart(id)}>+ </Button>
        </Col>
      </Row>
    </Card>
  );
}
