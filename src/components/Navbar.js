import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTop({ onClick }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Perfect Electronics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Shop</Nav.Link>
            <Button onClick={onClick}>Cart</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
