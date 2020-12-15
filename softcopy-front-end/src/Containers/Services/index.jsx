import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageTitle from '../../Components/UI/PageTitle'
import serviceImg from '../../img/track.svg'
// import serviceImg from '../../img/service-vec.png'
import './Service.css'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'

/**
* @author
* @function Services
**/

const Services = (props) => {
  return(
    <>
    <PageTitle title="Services" para="This is where you'll know about all of our services we provide." />
    <section className="service-section section-padding" >
      <Container>
        <Row>
          <Col lg={4} className="col-12">
            <div className="service-grids right-align">
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-code" heading="Web Development" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-file-text-o" heading="Content Marketing" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-envelope-o" heading="Email Marketing" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
            </div>
          </Col>
          <Col lg={4} className="col-12">
            <div className="img-holder">
              <img src={serviceImg} alt="Services" />
            </div>
          </Col>
          <Col lg={4} className="col-12">
          <div className="service-grids right-col">
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-rocket" heading="Social Marketing" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-thumbs-o-up" heading="Social Media Managing" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
             <ServiceGrid gridClass="grid" iconDiv="icon" FontClass="fa fa-link" heading="Link Building" link="/" para="Magazine and housed in a gilded in frame. It showed a lady fitted" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
   )
  }


export default Services