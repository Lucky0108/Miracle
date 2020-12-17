// Basic Imports
import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";

// Components Import
import MainSection3Card from '../../Components/UI/Home/MainSection3Card'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import ServiceGrid from '../../Components/UI/Grids/ServiceGrid'
import MainSection4Grid from '../../Components/UI/Grids/MainSection4Grid'
import TestimonialGrid from '../../Components/UI/Grids/TestimonialGrid';

// Css Import
import './Home.css'

// Images Import
import home2img from '../../img/home-section-2.jpg'
// import vidImg from '../../img/video-img.jpg'
import vidImg from '../../img/customer_service.svg'
import port1 from '../../img/img-1.jpg'
import port2 from '../../img/img-2.jpg'
import port3 from '../../img/img-3.jpg'
import port4 from '../../img/img-4.jpg'
import port5 from '../../img/img-5.jpg'
import port6 from '../../img/img-6.jpg'
import test1 from '../../img/f1.jpg'
import test2 from '../../img/f2.jpg'
// import heroVec from '../../img/10140.jpg'
// import heroVec from '../../img/hero-vec.png'
import heroVec from '../../img/hero.png'

/**
* @author
* @function Home
**/

const Home = (props) => {

  const [isOpen, setOpen] = useState(false)
  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <div className="Home-div">

        {/* Hero Section */}
        <section className="hero-section">
            <div className="container hero-container">
              <Row>
                <Col md={8}>
                  <div className="slide-heading">
                    <h2>Miracle Solutions</h2>
                    <span>Best Place To Work</span>
                  </div>
                  <div className="slide-text">
                    <p>
                      This is the one place stop for all your needs. We Provide you with various services and exclusive offers. Explore our website to know more.
                    </p>
                  </div>
                  <div>
                    <Link to="/about" className="btn-theme">More About Us</Link>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="hero-vec">
              <img src={heroVec} alt="Hero Vector" />
            </div>
        </section>

        {/* About Us Section */}
        <section className="section-padding about-us-home-section home-section-1">
            <Container>
              <Row>
                <Col lg={6} xs={12}>
                <div className="feature-grids clearfix">
                <ServiceGrid gridClass="grid" FontClass="fas fa-laptop-code font-icon" heading="Web Development" para="Get Yourself a Professional Website Developed." />
                <ServiceGrid gridClass="grid" FontClass="fas fa-users font-icon" heading="Marketing" para="Earn Some Money With Us Doing Marketing Campaigns." />
                <ServiceGrid gridClass="grid" FontClass="fas fa-search-dollar font-icon" heading="SEO Optimization" para="List Your Website In Top Pages With An Expert." />
               </div>
                </Col>
                <Col className="col" lg={6} xs={12}>
                  <HomeHeading class="home-section-1-heading" span="01. About Us" h2="Build Your Business with Our All In One Agency" />
                  <div className="home-section-1-details">
                    <h5>
                      Get Ready To Get Your Buisness A Great Jump Start With Our Agency.
                    </h5>
                    <p>
                    Have you been thinking about starting your buisness or simply earn some extra money? We're here for to help you in all your needs. We can help you develop a professional looking website for your buisness and list them among the top results of search engine. 
                    </p>
                    <Link to="/about" className="btn-theme">More About Us</Link>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>

        {/* Why Choose Us Section  */}
        <section className="section-padding why-choose-us-section home-section-2">
            <Container>
              <Row>
                <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <HomeHeading class="home-section-2-heading" span="02. Why Choose Us" h2="We Provide You Both Services And Earning Opprotunity" p="We not only provide you with different types of services but we also provide you with an opportunity to earn extra side income with us." />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12} className="img-div">
                  <div className="img-holder">
                    <img src={home2img} alt="" className="home-section-2-img" />
                  </div>
                </Col>
                <Col lg={6} xs={12} md={6} sm={12}>
                  <div className="about-us-grids clearfix">
                  <ServiceGrid iconDiv="icon" gridClass="about-grid" FontClass="fas fa-laptop-code" heading="Web Development" para="Get Yourself a Professional Website Developed." />
                  <ServiceGrid iconDiv="icon" gridClass="about-grid" FontClass="fas fa-users" heading="Marketing" para="Earn Some Money With Us Doing Marketing Campaigns." />
                  <ServiceGrid iconDiv="icon" gridClass="about-grid" FontClass="fas fa-search-dollar" heading="SEO Optimization" para="List Your Website In Top Pages With An Expert." />
                  </div>
                </Col>
              </Row>
            </Container>
        </section>

        {/* Services Section */}
        <section className="section-padding services-home-section home-section-3">
            <Container>
              <Row>
                <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <HomeHeading class="home-section-3-heading" span="03. Best Services" h2="We Provide Better Service For Your Business" p="Look at all the different service we provide and choose the one that fits you right and leave the rest up to us." />
                </Col>
              </Row>
              <Row>
                <div className="home-section-3-grids">
                  <MainSection3Card icon="fa-code" iconBg="#f2dcd3" extraClass="card1" title="Web Development" para="A Professional Website Developed For Your Buisness." />
                  <MainSection3Card icon="fa-search" iconBg="#d4d6f8" extraClass="card2" title="SEO Optimization" para="List Your Website Aming The Top Results Of Search Engine." />
                  <MainSection3Card icon="fa-credit-card" iconBg="#c2dfcd" extraClass="card3" title="GST & ITR Solutions" para="Make Money With Us In Our Marketing Campaigns." />
                </div>
              </Row>
              <Row>
                <div className="home-section-3-grids">
                  <MainSection3Card icon="fa-thumbs-up" iconBg="#e0e8c9" extraClass="card4" title="Social Media Managing" para="Let Us Increase Your Reach On Your Social Media Handles." />
                  <MainSection3Card icon="fa-star" iconBg="#f2dcd3" extraClass="card5" title="PPC Marketing" para="Get Paid For Doing Some PPC Marketing Campaign." />
                  <MainSection3Card icon="fa-link" iconBg="#efc9d5" extraClass="card6" title="Link Building" para="Get Yourself A Better Search Engine Ranking." />
                </div>
              </Row>
            </Container>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding portfolio-section home-section-4">
            <Container>
              <Row>
                <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <HomeHeading class="home-section-4-heading clearfix" span="04. Portfolio" h2="Please check out our recent works" p="This is some of our recent work for you to check out." />
                </Col>
              </Row>
              <Row>
                <Col className="col col-xs-12">
                  <div className="portfolio-grids clearfix">
                    <MainSection4Grid title="Digital Marketing" imgSrc={port1} para="Agency" />
                    <MainSection4Grid title="Web Development" imgSrc={port2} para="Agency" />
                    <MainSection4Grid title="SEO Optimization" imgSrc={port3} para="Agency" />
                    <MainSection4Grid title="Marketing Campaigns" imgSrc={port4} para="Agency" />
                    <MainSection4Grid title="PPC Marketing" imgSrc={port5} para="Agency" />
                    <MainSection4Grid title="Graphic Designing" imgSrc={port6} para="Agency" />
                  </div>
                </Col>
              </Row>
            </Container>
        </section>

        {/* Video CTA section */}
        <section className="video-cta-area">
          <Container>
            <Row>
              <Col className="col-xs-12">
                <div className="video-img-holder img-holder">
                  <img src={vidImg} alt="" />
                  <div className="video-btn">
                    <div>
                      <ModalVideo openMessage="You Just Opened Our Special Video" dismissBtnMessage="Close the video by clicking here" channel='youtube' autoplay={1} controls={0} showinfo="0" mute={1} isOpen={isOpen} 
                        // videoId="vbYB4rddM-8"
                        videoId="TVShZg9X5V0" 
                        onClose={() => setOpen(false)} 
                      />
                    </div>
                    <button onClick={() => setOpen(true)} className="wrap">
                      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjk0Ljg0MyAyOTQuODQzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTQuODQzIDI5NC44NDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0yNzguNTI3LDc5Ljk0NmMtMTAuMzI0LTIwLjAyMy0yNS4zOC0zNy43MDQtNDMuNTM4LTUxLjEzMmMtMi42NjUtMS45Ny02LjQyMS0xLjQwNy04LjM5MiwxLjI1N3MtMS40MDcsNi40MjEsMS4yNTcsOC4zOTINCgkJYzE2LjY4NywxMi4zNCwzMC41MjEsMjguNTg2LDQwLjAwOCw0Ni45ODNjOS45NCwxOS4yNzcsMTQuOTgsNDAuMTI4LDE0Ljk4LDYxLjk3NmMwLDc0LjY3MS02MC43NSwxMzUuNDIxLTEzNS40MjEsMTM1LjQyMQ0KCQlTMTIsMjIyLjA5MywxMiwxNDcuNDIxUzcyLjc1LDEyLDE0Ny40MjEsMTJjMy4zMTMsMCw2LTIuNjg3LDYtNnMtMi42ODctNi02LTZDNjYuMTMzLDAsMCw2Ni4xMzMsMCwxNDcuNDIxDQoJCXM2Ni4xMzMsMTQ3LjQyMSwxNDcuNDIxLDE0Ny40MjFzMTQ3LjQyMS02Ni4xMzMsMTQ3LjQyMS0xNDcuNDIxQzI5NC44NDIsMTIzLjk3NywyODkuMjAxLDEwMC42NDUsMjc4LjUyNyw3OS45NDZ6Ii8+DQoJPHBhdGggZD0iTTEwOS42OTksNzguOTY5Yy0xLjg3NiwxLjA2Ny0zLjAzNSwzLjA1OS0zLjAzNSw1LjIxNnYxMzEuNjc0YzAsMy4zMTQsMi42ODcsNiw2LDZzNi0yLjY4Niw2LTZWOTQuNzRsODguODMzLDUyLjg4Mw0KCQlsLTY1LjMyNCw0Mi4wODdjLTIuNzg1LDEuNzk1LTMuNTg5LDUuNTA4LTEuNzk0LDguMjkzYzEuNzk2LDIuNzg2LDUuNTA4LDMuNTksOC4yOTQsMS43OTRsNzMuNDY1LTQ3LjMzMw0KCQljMS43NDYtMS4xMjUsMi43ODYtMy4wNzMsMi43NDktNS4xNWMtMC4wMzctMi4wNzctMS4xNDUtMy45ODctMi45My01LjA1TDExNS43MzMsNzkuMDI5DQoJCUMxMTMuODc3LDc3LjkyNiwxMTEuNTc1LDc3LjkwMiwxMDkuNjk5LDc4Ljk2OXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="" />
                    </button>
                  </div>
                </div>
                <div className="content">
                  <h2>
                    Have A Query? Feel Free To Contact With Us!
                  </h2>
                  <p>We are available here 24*7 for you to reach out to us incase you have any queries or any doubts you have regading our services or our website. We'll resolve all of your queries.</p>
                  <Link className="btn-theme" to="/contact">Contact With Us</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding testimonial-home-section home-section-5">
            <Container>
              <Row>
                <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <HomeHeading class="home-section-5-heading" span="05. Testimonials" h2="What Clients Say About Us!" />
                </Col>
              </Row>
              <Row>
                <Col className="col-xs-12">
                  <div className="testimonial-slider">
                    <div className="testimonial-content-active text-center">
                      <Slider {...sliderSettings}>

                        <TestimonialGrid 
                          // imgSrc="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkZFODVCQ0U0RTEzMTFFQTg5QzRDQTBBRDE3NENGN0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkZFODVCQ0Y0RTEzMTFFQTg5QzRDQTBBRDE3NENGN0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RkU4NUJDQzRFMTMxMUVBODlDNENBMEFEMTc0Q0Y3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RkU4NUJDRDRFMTMxMUVBODlDNENBMEFEMTc0Q0Y3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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" 
                          imgSrc={test2}
                          para='"This is my testimonial for Miracle Website Which has the best service and the very best customer service and great team members who are really nice"' 
                          name="Lakshay Yadav" 
                          desig="Happy Client"  
                        />

                        <TestimonialGrid 
                          // imgSrc="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjdBQzM3OUU0RTEzMTFFQTgwNDM4Q0NDMEM4MEQyRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjdBQzM3OUY0RTEzMTFFQTgwNDM4Q0NDMEM4MEQyRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyN0FDMzc5QzRFMTMxMUVBODA0MzhDQ0MwQzgwRDJFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyN0FDMzc5RDRFMTMxMUVBODA0MzhDQ0MwQzgwRDJFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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"
                          imgSrc={test1}
                          para='"Great To Be A Part Of It Dicture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered"' 
                          name="Umashankar Sarswat" 
                          desig="Happy Client"  
                        />

                        <TestimonialGrid 
                          imgSrc="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM2MjM3REU0RTEzMTFFQTlEMzVEN0ZFQ0VBRkQ0NUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM2MjM3REY0RTEzMTFFQTlEMzVEN0ZFQ0VBRkQ0NUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzYyMzdEQzRFMTMxMUVBOUQzNUQ3RkVDRUFGRDQ1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzYyMzdERDRFMTMxMUVBOUQzNUQ3RkVDRUFGRDQ1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAGQAZAMBEQACEQEDEQH/xACiAAABBQEBAAAAAAAAAAAAAAAGAgMEBQcAAQEAAgMBAQEAAAAAAAAAAAAAAgMBBAUABgcQAAEDAgQDBQYEAwcFAAAAAAERAgMABCExEgVBEwZRYZEiFHGBocEyB7FCUmJyIxXw0eGCkjMkskOTRBYRAAIBAwMCAwQIBwAAAAAAAAABAhEhAzESBEFRYSIFgdEyE3GRocFyIzMG8LHhQlJiFP/aAAwDAQACEQMRAD8A15qGvntaG+riwOymJ1IaGogFenB5J96UqRDPSHOcCDh2UW61Dj0tIGVTtqiKiS0pj8aBxoTU4gpjlRKJFRvSdSAVzgFuOLXLicBxqdtCHIS5q0po4Q449wrlGwQyVUkuXFfZTVEhs7FfqNSdUsANLu6g1QKsPNroMYxmMIZh+/5ConqCONVKKKAZGiuY5Zpo8QYS0OJy8wXOrbwuKXiSyB/Wo2X0/NeI7OFukKgc6XAnT3NafNwpk+NZRXxdSaWXcesNyiurI3zgYYXOIYX5Oa0oHN7nUmWJqW1XBmtroRL3qW2tI3TOicIhlJIRG341ZhwJPUDegTl+8e02u4xQXtslnO7Q2+geJGtK/magPhTZenSas9CWwx2zets3WAz7fcNuIgiluBC5KDiKzcmGUdUEmSHEIVFC4kbiNI4jMYVNCU6na8O+ooEXCKKU1Rk6nrChqFqcmJYvNlH7mp4UUlc5jhwx7MqKIAJ7vvo2oXpMRkDXMc/Quokta1jR7SpJPCtz5XnT7IlKqKvpyzN9BHe37XC2LzObeQee4lLigK48png41E229sfaw8jpoJ6l61Fs4ttmi8u2kt5MZDmxpgFRQKs8fCo6L2lacLXa+gDLrpLdOrHG53m9eNX0W8ZOhoPvpnzqOxYjiSRSbv8Aad+3Wjn2crrhzPO2GTJxHYnGjjyr3Alh7CvtX1FcbbvDrWd7BzTp5YGhxQ44fmPbxpfN46nGwpNm6l7nAOBVjgCPYa8+0cNFxGBCA8O+oaCTO8qd1QFuL0jGgmqoNM5OIpKOY2B/OlI4taU9hIprdUcKmOACoT/Y0/jYd8vBC26GW9abnPcb5JbQavTRtDpy0cG1tu4zHYrt16g3NsdttcH/AB23I1ujZg9kDf1u4FxQIKPDBOV9Ac09sW1r3BLqLcJtvebWRsrCxurTEdJAIUHDtWrylVlaONKPcIPtx1WXRcq7e6WIyFkVy4YhW6g2TsOYWk8iFVWgzDKj21+gNt2v7L05LntCjtqjRluLMnl2mwv+uGW8YR120ywStwLJWj6gR3jEVchJ/LEZUlI2jp27ludntnyfWGBsg/cMDWLy8dJi0WBIcKquNCRrS/Ui+X41xAQ4nOq+8fQUG4fhQnMbH+48cQ0L7NVG0CivvbyKKF800mgEYE5BpyrbwY1jh4g0q6ALtnoib2/uHtSSVwGpPpbhj76etA5LzEK4tdgdN67nSzSXSMmLMRHGwEta1B+rPGhcvsHxj0oDe69M29/fuex03KLULin+lDViPJVLq4qXGlG0XbxHrjYJNhsW2UDRFczQyzx25cNWlqeZ7j5SXHKnYszlL/UqZsMUr3lXX3AEOqNzhPqY7l8rGkiaKTMAYFBkfYRVl00BUEwx22ylt95suqGNYNtfCxjGL5mzStLnBo/SAPjVfLRKi63CxuUk69HQ0fpm7A26RwCrI9zWqmBcT86zOTj3NDIRqXpBDsciMuys13JR55OyhodQIwKpxVRrFhuFOjAFsi3DuW6dxy5JPgaOK0IWoI9UmeTb7yJpwMcbY/4sV+Vb1VQhLzELf9h2PYILNkECaQXPfI5zy4tapPnJFUcWWUtRkW2CfTMdzJt4jnB5800tw1vY2Yuc0e4GrLu2WFag7LdHbYnWm5t9XZuVpkcBzI+wlc/bRx1tqNeNONjzcNvdLbSbrfXLp7kt0QucVHKOKJ2JURyuLsJlhU1RglvHQ+x7e+13YsnvbLcJGhjbdzQzU8qj9SOaMMa0cedSsUcuHJHRoKmwSX/Q814GCN0FzzRA0+WONrQ0NHsbVeeSuQPHi2Y0kGPTO3SWuy2bZgs92k5b+lv1NB+FV81ZKi6nUoWkAWWSRVBRre8NXze81n8iie1dCW6ji+ZeGVJoQErc6qYkGx1owWnxQLKrfJhG0NJA56MC4fmDj8BTMMazJgrgl1HI5kd4cQ0tjIOCKAciK1uhC1GPuLp3O9sdsLi2GZjhK9pQiPT/ADHLwzDQe2qXGTVxuNWAq4v9y2OZwuyJobYDkbi0YlihobMwDB2P1DCr6ipXjr29we5qilp3Gd9682m+gY2SBr5PzEAPaeCqFWhUHUaraMGdz67dc8vboQUaAETSxje08afj41bsTkzUsHHQkB3LpWTbmSc2SO6kcyV/CMtEngrgKiUaMVuqgt6R2KSxgv2XjWSwXDwWM+piAaTge1KW7upNaKhc7iJCzVBKIA9uiWdzvLHEMSgy1HKiSsKbGYNb3B4LmxtbpaCELsPqcOHcKzMkofDH6yR78udJ6nBQOFVMTuFIi7zvVls+3yXl0Tobg2Nv1Od2CreODk6IEDoLz/6m5ZfXsJit2AttrTUdIC4vdkrjVzHDY2kOjGkSk6tt7y0tLyS1PNt4yhgcmsgMBOlwRUXAO8RVxOtExSV3QTH1Hbbpbw34kBkuIWadQDSGJg0Cq6xqLoPSsDm5TTu56DU1oBP8KgY+NOUSd2gG7lsO2PuXONu1r3eYujJZ/wBJFOx5JU1InCNdCjn6bLJS60a9pXNquUfuJWrEc3cS8S6Gx/Z+KG0tZ7Zz+ZMY9Uj8lcXDJeAAApOWaA2M0GV9jtluZb6ZrGBS1rigX350qJMik23dzvrnX/8A6THltvCmCsKa3dp/CqnMyteVAFqJGqSjsc0BNZtQkN+qjVEdnnpd/dTKMLoGBCVWjCjJYH/cCZHWcZGoFry1pyJX/ACr/HDghfT9totFOYCL7KfDuNyFH1M5x2i5e5zXue6TzMwBAJA8AEqw9REQJZEJbZjSERo0kcMKB6llEiyt5QJI5FcHxlodnxB+VMTsLlqvpHLfaA+5c98QPfUbrBtCN22bAPjGkjgMAa6MjmhfSO82kfUvpC3lBsLWPPAve4EL7hTnj8ifiV3l87XZBP8Ac6GIbPzvzs06X8QH4ED20uLpY6N3cr/t1eOdYXFoSrYXB7PY/AjxFUedGjTImrhauJHxrPqAkI0NX3035jDoFDJQ5DqUHEUiNmEwf64teZHYzp5Y3uYf8yOH4VaxTs0HhVZEja2htl7lq7jVicruCHVUobsmBPnaXK4IfMS7Ee+nPUXBAztzw+1bhwA8K5q45E+2a4HHKobOUS2tWtwBNLbDoTJLSOaM4VyOboB3TG3RR9f3/OGrRPAWggIhjAb860JP8mFPEzY/rZF+H+QUfdN737ZIwfsJ9xqpF3LcEUP22efV3LeHJC+5wpHOXkQM9Q841kNgUGucdSJ+ZE7qfssGEsLwXhvsJHYtL20OK7q0SPs7dzV5bJTzPaR5fnTMeo7j6schjfHYOa1ut+jytUNVR2mtTGLyXMv6+3VlvbiyDkEYDFceAAAU06Ed0iLJHdPWEj7RijFKGTuNLl1lpcGcUy40qTJiWu2bdrwREzNLVwpOhF6q3/aOn7f/AJUo57x/Kt2eaR3+UZDvOFXsHFnk+Fe0zuV6hjwqs3ft1ALpHcpN+6vkuXsFuBJFKPOiMia4AuIzzq9ycPycajWupn8Hl/8ATklOlNA665ktp7Z7BKwrGRg4HGsiNam4tCm+3cOia9emTGN8XE/Klc9+VCpBoTjWPIhDCt15catV8vsCCGyMfNIYgcqvHaTxo5ppXBTJzo4po5IZW6o3hHCk+ISdLgd1T1LcdLtb6xrZbeXy28rVBJ7HDtrS4sZ5bRVWjsvMw44p5Htq6GG9Zb63fJ3uD2hssgC8CBinjXoODxZQdZIwPVfU4Sjsxvd7iw6P+4d3srGWF+03loiRSIkjGjvOY7jR8n09TdY2f2COF61KCpO8ftXvDXbeutlN+bqZ6QlqNacSp7qypcDLXQ3F6txnCu9L+OxVbp92Joo3WmzxiOWUOS+kGrQMvKzt7z4Vd4vpVL5PqMnn+v7lTCva/uXvM8vLy7kM9zcyOnu5DrdI8l5K4anE1txSiqI8xKTyTq3UMPs1tUu6zXUk0pENvIPM0A63uAKEFR5RWH6rJKS7s9j6Ivy3ayYbdX9EWNw4ObI9rnKXYMQlO5orMjmaNnYmedBxMgsrpqrI2QMce5ow/GqnO8zQl2CUvVO/OsqaCiIw1ooVVyp19vsCLy05Hqm6V5ugr2Jq41Z5O7bfQXjpUs2Lr/Gq3QJmY/fXm+n2jPkLOqfrRqfCvRft6lZ97feeV/cm78v/ABv9djFovSciTVp9Tq4fWqldOvy16RmGq+wWzlepKLpw1/rRPHwokLnoTLL+maZOYi6xyeUmrLzLr+NLlWpZVKEKTlc6fnaeZqPLXLQp7MfGmIQ+m34Ri416n8n6eXhy05aYe/LJakOPj/U1H7Acn+mX+nP1RX/xsTKvO+rfqr8J7b0b9B/iNF33TqC5IU8KzDWWgIdLavUX+n/Z5keSrr8yZcEzpXL0QiYTjV5UyxXtrKn1OiNf9z9/yqz/AGkn/9k="
                          para='"Mr Roy Dicture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered"' 
                          name="Nipun Goyal" 
                          desig="Happy Client"  
                        />

                      </Slider>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
      </div>
    </>
  )
}


export default Home