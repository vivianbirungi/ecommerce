import React from "react";
import Col from "react-bootstrap/Col";
import image1 from "../assets/1.jpg";
function Product({ data }) {
  return (
    <div>
      <Col>
        <img src={data.productImage} height={50} width={50} />
        <h6>{data.productName}</h6>
        <span>{data.price}</span>
      </Col>
    </div>
  );
}

export default Product;
