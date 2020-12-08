import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from '../../Components/PageTitle'
import errorImg from '../../img/404.svg'
import { NavLink } from 'react-router-dom'
import './Error.css'

/**
* @author
* @function ErrorPage
**/

const ErrorPage = (props) => {
  return(
    <>
    <PageTitle title="Error 404" para="Hey There! Looks Like You Have Ended Up At A Broken Link!" />
    <section className="error-section section-padding">
        <Container>
            <Row>
                <Col className="col-md-8 offset-md-2">
                    <div className="content clearfix">
                        <div className="img-holder">
                            <img src={errorImg} alt="Error 404" />
                        </div>
                        <div className="error-message">
                            <h3>Oops! Page Not Found!</h3>
                            <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                            <NavLink to="/" className="btn-theme">Back To Home</NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
   )
  }


export default ErrorPage