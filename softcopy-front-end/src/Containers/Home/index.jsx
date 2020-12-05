import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import sec1 from '../../img/cloud.png'
import home2img from '../../img/home-section-2.jpg'
import './Home.css'
import MainSection3Card  from '../../Components/UI/Home/MainSection3Card'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>
      <div className="Home-div">
        <div className="home-section-0" style={{ background: `url(${sec1}) 80px 125px/auto no-repeat local` }}>
          <div className="container hero-container">
            <Row>
              <Col md={8}>
                <div className="slide-heading">
                  <h2>Soft Copy</h2>
                  <span>Best Place To Work</span>
                </div>
                <div className="slide-text">
                  <p>
                    Recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat.
                </p>
                </div>
                <div>
                  <NavLink to="/about" className="btn-theme">More About Us</NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-padding home-section-1">
          <Container>
            <Row>
              <Col className="col" lg={6} xs={12}>
                <div className="feature-grids">
                  <div className="grid">
                    <i className="fa fa-code font-icon" aria-hidden="true">
                    </i>
                    <h3>
                      Web Development
                 </h3>
                    <p>Get Yourself a Professional Website Developed.</p>
                  </div>
                  <div className="grid">
                    <i className="fa fa-users font-icon" aria-hidden="true">
                    </i>
                    <h3>
                      Marketing
                 </h3>
                    <p>Earn Some Money With Us Doing Marketing Campaigns.</p>
                  </div>
                  <div className="grid">
                    <i className="fa fa-star font-icon" aria-hidden="true">
                    </i>
                    <h3>
                      SEO Optimization
                 </h3>
                    <p>List Your Website In Top Pages With An Expert.</p>
                  </div>
                </div>
              </Col>
              <Col className="col" lg={6} xs={12}>
                <div className="home-section-1-heading">
                  <span>01. About Us</span>
                  <h2>
                    Build Your Business with Our All In One Agency
                 </h2>
                </div>
                <div className="home-section-1-details">
                  <h5>
                    Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated
                 </h5>
                  <p>
                    Picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered llustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright.
                 </p>
                  <NavLink to="/about" className="btn-theme">More About Us</NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-padding home-section-2">
          <Container>
            <Row>
              <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-md-1">
                <div className="home-section-2-heading">
                  <span>02. Why Choose Us</span>
                  <h2>
                    We provide better service for Your Business
                </h2>
                  <p>
                    picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur
               </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12} className="img-div">
                <div className="img-holder">
                  <img src={home2img} alt="" className="home-section-2-img" />
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="about-us-grids">
                  <div className="about-grid">
                    <div className="icon">
                      <i className="fa fa-code" aria-hidden="true" />
                    </div>
                    <h3>
                      Web Development
                  </h3>
                    <p>
                      Get Yourself a Professional Website Developed.
                  </p>
                  </div>
                  <div className="about-grid">
                    <div className="icon">
                      <i className="fa fa-users" aria-hidden="true" />
                    </div>
                    <h3>
                      Marketing
                  </h3>
                    <p>
                      Earn Some Money With Us Doing Marketing Campaigns.
                  </p>
                  </div>
                  <div className="about-grid">
                    <div className="icon">
                      <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <h3>
                      SEO Optimization
                  </h3>
                    <p>
                      List Your Website In Top Pages With An Expert.
                  </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-padding home-section-3">
          <Container>
            <Row>
              <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-md-1">
                <div className="home-section-3-heading">
                  <span>03. Best Services</span>
                  <h2>
                    We provide better service for Your Business
                </h2>
                  <p>
                    picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur
               </p>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="home-section-3-grids">
                <MainSection3Card icon="fa-code" iconBg="#f2dcd3" extraClass="card1" title="SEO Optimization" para="Magazine and housed in a gilded in frame It showed a lady" />
                <MainSection3Card icon="fa-file-text-o" iconBg="#d4d6f8" extraClass="card2" title="Content Marketing" para="Magazine and housed in a gilded in frame It showed a lady" />
                <MainSection3Card icon="fa-envelope-o" iconBg="#c2dfcd" extraClass="card3" title="Email Marketing" para="Magazine and housed in a gilded in frame It showed a lady" />
              </div>
            </Row>
            <Row>
              <div className="home-section-3-grids">
                <MainSection3Card icon="fa-thumbs-o-up" iconBg="#e0e8c9" extraClass="card4" title="Social Marketing" para="Magazine and housed in a gilded in frame It showed a lady" />
                <MainSection3Card icon="fa-star-o" iconBg="#f2dcd3" extraClass="card5" title="PPC Marketing" para="Magazine and housed in a gilded in frame It showed a lady" />
                <MainSection3Card icon="fa-link" iconBg="#efc9d5" extraClass="card6" title="Link Building" para="Magazine and housed in a gilded in frame It showed a lady" />
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}


export default Home