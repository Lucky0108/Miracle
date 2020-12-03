import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {
 
  const [nav, setNav] = useState(false)
  
  const changeNavColor = () => {
    if(window.scrollY >= 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeNavColor);

  return (
    <>
    <Navbar className={nav ? 'navDiv navbar-scroll-color' : 'navDiv'} fixed="top" expand="lg">
        <Container fluid>
        <NavLink to="/" className="navbar-brand site-brand">Softcopy<span style={{color:'#FC6E36',fontSize:'2.5rem'}}>.</span> </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">Home</NavLink>
            <NavLink to="/service" className="navLink" activeClassName="activeNavLink">Services</NavLink>
            <NavLink to="/about" className="navLink" activeClassName="activeNavLink">About Us</NavLink>
            <NavLink to="/contact" className="navLink" activeClassName="activeNavLink">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/login" className="navLink" activeClassName="activeNavLink">Login</NavLink>
            <NavLink to="/signup" className="navLink" activeClassName="activeNavLink">Join Us</NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default NavbarComp