import React from "react";
import Button from "react-bootstrap/Button";

function Product({ data, addCart }) {
  const { id, productImage, productName, price } = data; // destructuring from the parent shop
  const addToCart = () => {
    addCart(data);
  };
  return (
    <div key={id}>
      <img src={productImage} alt="Product" width={300} height={300} />
      <h6>{productName}</h6>
      <span>{price}</span>
      <br />
      <Button variant="outline-primary" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
