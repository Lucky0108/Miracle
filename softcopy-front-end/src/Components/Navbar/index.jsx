import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions'
import { toastr } from 'react-redux-toastr'

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {
 
  const [nav, setNav] = useState(false);
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const changeNavColor = () => {
    if(window.scrollY >= 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeNavColor);

  const logoutBtn = () => {
    dispatch(logout())
  }

  if(auth.success) {
    toastr.success("Yayy", "You are logged out successfully!!")
  }

  const renderLoggedinLinks = () => {
    return (
      <Nav className="ml-auto"> 
       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
       <a className="navLink" activeClassName="activeNavLink" onClick={logoutBtn} style={{cursor: "pointer"}}>Logout</a>
      </Nav>
    )
  }

  const renderNonLoggedinLinks = () => {
    return (
      <Nav className="ml-auto"> 
       <NavLink to="/login" className="navLink" activeClassName="activeNavLink">Login</NavLink>
       <NavLink to="/signup" className="navLink" activeClassName="activeNavLink">Join Us</NavLink>
      </Nav>
    )
  }

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
            {auth.authenticate ? renderLoggedinLinks() : renderNonLoggedinLinks() }
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default NavbarComp