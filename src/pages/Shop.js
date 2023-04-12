import React, { useState } from "react";
import { Products } from "../Database/Product";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavTop from "../components/Navbar";
import Cart from "../pages/Cart";
function Shop() {
  const addToCart = (item) => {
    // console.log(item);
    setCart([...cart, item]);
  };
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const handleClose = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <NavTop onClick={openModal} />

      <Container>
        <Row>
          {Products.map((item) => (
            <Col style={{ padding: 3 }}>
              <Product data={item} addCart={addToCart} />
            </Col>
          ))}
        </Row>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Cart data={cart} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Shop;
