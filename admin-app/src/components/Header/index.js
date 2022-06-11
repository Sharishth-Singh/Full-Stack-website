import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
const index = props => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Admin DashBoard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/signin">SignIn</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
export default index
