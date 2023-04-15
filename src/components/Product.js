import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../context/ShopContext";

function Product({ data, addCart }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productImage, productName, price } = data; // destructuring from the parent shop
  const itemQuantity = cartItems[id];
  return (
    <div key={id}>
      <img src={productImage} alt="Product" width={300} height={300} />
      <h6>{productName}</h6>
      <span>{price}</span>
      <br />
      <Button variant="outline-primary" onClick={() => addToCart(id)}>
        {/* add quantity to the button  */}
        Add to Cart {itemQuantity > 0 && <>({itemQuantity})</>}{" "}
        {/*Empty bracket added by prettier*/}
        {/*itemQuantity > 0, display itemQuantity*/}
      </Button>
    </div>
  );
}

export default Product;
