import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {
  return (
    <>
    <Navbar fixed="top" bg="dark" variant="dark" color="white" expand="lg">
        <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Servies</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Softcopy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Join Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default NavbarComp