import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useSelector } from 'react-redux'


function Header() {

    const role = useSelector((state) => state.auth);

    console.log(role)

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Complaint Mangment system</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">{"role"}</Nav.Link>
            <Button variant="danger">Sign out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
