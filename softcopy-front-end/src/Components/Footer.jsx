import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import footCloud from '../img/footer-shape.jpg'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  
    return (
        <>
            <footer fixed="bottom" className="site-footer" style={{ background: `url(${footCloud}) bottom/cover no-repeat local` }}>
                <div className="upper-footer">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="footer-about-section">
                                    <h3 style={{marginTop:'-12px'}} className="site-brand widget-title">Softcopy<span style={{ color: '#FC6E36', fontSize: '2.5rem' }}>.</span></h3>
                                    <p>Anand International College of Engineering, Near Kanota, Agra Road, Jaipur, Rajasthan 303012</p>
                                    <div className="social-icons">
                                        <ul>
                                            <li>
                                                <a href="https://instagram.com/softcopy_official">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/softcopy_official">
                                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/softcopy_official">
                                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/softcopy_official">
                                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="widget footer-company-section">
                                    <h3 className="widget-title">Company</h3>
                                    <ul>
                                        <li>
                                            <a href="/">
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Our services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Contact us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Meet team
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="/">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                News
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                FAQ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="widget footer-service-section">
                                    <h3 className="widget-title">Services</h3>
                                    <ul>
                                        <li>
                                            <a href="/webdev">
                                                Web Development
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/seo">
                                                SEO Optimization
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/earning">
                                                Earning Tricks
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/notes">
                                                Notes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                            <div className="widget footer-newsletter-section">
                            <h3 className="widget-title">Newsletter</h3>
                            <p>
                            You will be notified when somthing new will be appear.
                            </p>
                            <form>
                                <div className="newsletter-input-div">
                                    <input type="email" className="form-control newsletter-input" placeholder="Email Address *" required />
                                </div>
                                <div className="submit-button-div">
                                    <button type="submit">
                                    <i className="fa fa-envelope-o"></i>
                                    </button>
                                </div>
                            </form>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="lower-footer">
                    <Container>
                        <Row>
                            <div className="seperator"></div>
                            <Col xs={12}>
                                <p className="copyright">
                                    Copyright © 2020 Soft Copy. All rights reserved.
                               </p>
                                <div className="extra-links">
                                    <ul>
                                        <li><NavLink to="/about">Privacy & Policy</NavLink></li>
                                        <li><NavLink to="/about">Terms</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li><NavLink to="/about">FAQ</NavLink></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}


export default Footer