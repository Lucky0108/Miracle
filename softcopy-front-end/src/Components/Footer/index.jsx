import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footCloud from '../../img/footer-shape.jpg'
import './Footer.css'
import { useSelector, useDispatch } from 'react-redux'
import { newsletter } from '../../actions/newsletter.action'
import {toastr} from 'react-redux-toastr'


/**
* @author
* @function Footer
**/

const Footer = (props) => {
    // 2-D Array for Footer Icons having links and icon names
    const FooterIconListItems = [
        ["https://facebook.com/softcopy_official", "fa-facebook"], ["https://twitter.com/softcopy_official", "fa-twitter"],
        ["https://instagram.com/softcopy_official", "fa-instagram"], ["https://linkedin.com/softcopy_official", "fa-linkedin"]
    ]

    // 2-D Array for Footer Company List having links and Respective Name
    const FooterCompanyList = [
        ["/about", "About us"], ["/service", "Our services"], ["/contact", "Contact us"], ["/team", "Meet team"]
    ]

    // 2-D Array for Footer Company List 2 having links and Respective Name
    const FooterCompanyList2 = [
        ["/policy", "Privacy Policy"], ["/testimonial", "Testimonials"], ["/news", "News"], ["/faq", "FAQ"]
    ]

    // 2-D Array for Footer Service List  having links and Service Name
    const FooterServiceList = [
        ["/service", "Web Development"], ["/service", "SEO Optimization"], ["/service", "Earning Tricks"], ["/service", "Notes"]
    ]

    //  Function To Render Icon List
    const renderIconListItems = () => {
        return (  FooterIconListItems.map((val, index) => { return <li key={index}> <Link to={val[0]}> <i className={`fa ${val[1]}`} aria-hidden="true"></i> </Link> </li> }) )
    }

    // Function To Render Company List
    const renderCompanyList = () => {
        return ( FooterCompanyList.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    // Function To Render Company List 2
    const renderCompanyList2 = () => {
        return ( FooterCompanyList2.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    // Function To Render Service List 
    const renderServiceList = () => {
        return ( FooterServiceList.map((val, index) => { return ( <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li> ) }) )
    }

    const [email, setEmail] = useState('')
    const news = useSelector(state => state.news)

    const dispatch = useDispatch();

    const onNewsSubmit = (e) => {
        e.preventDefault();
       
        dispatch(newsletter({email}))
    }

    useEffect(() => {
        if(news.loading) {
            toastr.info("Loading...")
            toastr.loading = ""
        }
        if(news.message) {
            toastr.success("Success", news.message)
            news.message = ""
        } else if(news.error) {
            toastr.warning("Oops", news.error)
            news.error = ""
        }
    }, [news, news.message, news.error, news.loading])

    return (
        <>
            <footer fixed="bottom" className="site-footer" style={{ background: `url(${footCloud}) bottom/cover no-repeat local` }}>
                <div className="upper-footer">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="footer-about-section">
                                    <h3 style={{ marginTop: '-12px' }} className="site-brand widget-title">Miracle<span style={{ color: '#FC6E36', fontSize: '2.5rem' }}>.</span></h3>
                                    <p>Anand International College of Engineering, Near Kanota, Agra Road, Jaipur, Rajasthan 303012</p>
                                    <div className="social-icons">
                                        <ul>
                                            {renderIconListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="widget footer-company-section">
                                    <h3 className="widget-title">Company</h3>
                                    <ul>
                                        {renderCompanyList()}
                                    </ul>
                                    <ul>
                                        {renderCompanyList2()}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="widget footer-service-section">
                                    <h3 className="widget-title">Services</h3>
                                    <ul>
                                      {renderServiceList()}
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} xs={12}>
                                <div className="widget footer-newsletter-section">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <p>
                                        You will be notified when somthing new will be appear.
                                    </p>
                                    <form onSubmit={onNewsSubmit}>
                                        <div className="newsletter-input-div">
                                            <input type="email" className="form-control newsletter-input" placeholder="Email Address *" value={email} onChange={e => setEmail(e.target.value)} required />
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
                                        <li><Link to="/policy">Privacy Policy</Link></li>
                                        <li><Link to="/terms">Terms</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
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