import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'
import PageTitle from '../../Components/UI/PageTitle'
import './About.css'
import aboutUs from '../../img/about.png'
import whyUs from '../../img/why-choose-us-vec.png'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'


/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <>
   <PageTitle title="About Us" para="This is where you will get to know about us, What we do and why you should trust us." />
    <section className="feature-section section-padding">
      <Container>
        <Row>
          <Col className="col-xs-12">
            <div className="feature-grids clearfix">
              <ServiceGrid gridClass="grid"  FontClass="fas fa-gem" heading="Market Research" para="Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine valuealb" />
              <ServiceGrid gridClass="grid"  FontClass="fas fa-bullseye" heading="Keyword Targeting" para="Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine valuealb" />
              <ServiceGrid gridClass="grid"  FontClass="fas fa-envelope-open-text" heading="Email Marketing" para="Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine valuealb" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="about-us-section section-padding">
      <Container>
        <Row>
          <Col lg={6} xs={12} className="col about-us-data">
            <HomeHeading class="about-us-heading" span="About us" h2="Build Your Business with Our SEO Agency" />
            <div className="about-details">
              <h5>Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated</h5>
              <p>Picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered llustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy</p>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="img-holder">
              <img src={aboutUs} alt="About Us" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="why-choose-us-section section-padding">
      <Container>
        <Row>
          <Col className="col" lg={6} md={12} xs={12}>
          <HomeHeading class="why-us-heading" span="We are the best" h2="Why Choose Us" p="Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed" />
          <div className="why-us-grids">
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="fas fa-rocket" heading="First Working Prosses" para="Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright" />
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="fas fa-gem" heading="High-End Anaylizing" para="Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright" />
              <ServiceGrid gridClass="grid" iconDiv="icon"  FontClass="far fa-file-alt" heading="Dedicate Team" para="Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright" />
            </div>
          </Col>
          <Col className="col" lg={6} md={12} xs={12}>
            <div className="img-holder">
              <img src={whyUs} alt="Why Choose Us" />
            </div>
          </Col>
        </Row>
      </Container>

    </section>
    </>
   )
  }


export default About