import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import {handleLogOut} from '../../store/actions'
import { useHistory } from "react-router-dom";


function Header() {
    const dispatch = useDispatch()
    const history =useHistory();
    const role = useSelector((state) => state.auth.role);



    const logOut=()=>{
      dispatch(handleLogOut())
      history.push("/")
    }

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Complaint Mangment system</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{role === "admin" ? "chart" : null}</Nav.Link>
            <Nav.Link href="#pricing">{role === "admin" ? "all customer" : null}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">{role}</Nav.Link>
            <Button variant="danger" onClick={logOut}>Sign out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
