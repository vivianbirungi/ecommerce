import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../context/ShopContext";

function Product({ data, addCart }) {
  const { addToCart } = useContext(ShopContext);
  const { id, productImage, productName, price } = data; // destructuring from the parent shop

  return (
    <div key={id}>
      <img src={productImage} alt="Product" width={300} height={300} />
      <h6>{productName}</h6>
      <span>{price}</span>
      <br />
      <Button variant="outline-primary" onClick={() => addToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
