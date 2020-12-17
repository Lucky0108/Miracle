import React from 'react'
import { Container, Col, Row, Accordion } from 'react-bootstrap'
import PageTitle from '../../Components/UI/PageTitle'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import './faq.css'
import AccordionCard from '../../Components/UI/AccordionCard'
import FaqGrid from '../../Components/UI/Grids/FaqGrid'

/**
* @author
* @function FAQ
**/

const FAQ = (props) => {
    return (
        <>
            <PageTitle title="FAQ" para="Having Some Doubts Or Have Any Queries? Check Out Our Frequently Asked Questions To Clear Some Of Your Doubts And If You Still Have Some Questions Then Check Out Our Contact Section." />
            <section className="faq-section section-padding">
                <Container>
                    <Row>
                        <Col lg={6} className="col-12">
                            <HomeHeading class="faq-heading" span="04. FAQ" h2="You can get question answer from here!" p="Here are some of our Frequently asked questions. Please Have A Look!" />
                            <Accordion defaultActiveKey="0">
                                <AccordionCard title="1. Question number one, get answer form here" eventKey="0" para="Had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that." />
                                <AccordionCard title="2. Question number two, get answer form here" eventKey="1" para="Had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that." />
                                <AccordionCard title="3. Question number three, get answer form here" eventKey="2" para="Had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that." />
                            </Accordion>
                        </Col>
                        <Col lg={6} className="col-12">
                            <div className="faq-grids clearfix">
                                <FaqGrid dataCount="550" para="Happy Clients" plus />
                                <FaqGrid dataCount="50" para="Team Members" plus />
                                <FaqGrid dataCount="125" para="Projects" />
                                <FaqGrid dataCount="15" para="Awards" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default FAQ