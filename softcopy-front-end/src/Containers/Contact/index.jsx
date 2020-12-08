import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PageTitle from '../../Components/PageTitle'
import './Contact.css'
// import Input from '../../Components/UI/Input'

/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <>
    <PageTitle title="Contact Us" para="Confused About Something Or Having A Query? Don't Hesitate, Just Reach Out To Us And We'll Help You Out With All Of Your Problems." />
    <section className="contact-section section-padding">
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <div className="contact-info">
              <ul>

                <li>
                <i className="fa fa-home" aria-hidden="true"></i>
                <div className="contact-list-details">
                <h4>Head Office</h4>
                <p>Near Kanota, Agra Road, Jaipur, Rajasthan 303012</p>
                </div>
                </li>

                <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <div className="contact-list-details">
                <h4>Email Address</h4>
                <p>
                <a href="mailto:softcopyofficialteam@gmail.com">
                   softcopyofficialteam@gmail.com 
                </a>
                </p>
                </div>
                </li>

                <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <div className="contact-list-details">
                <h4>Telephone</h4>
                <p>+91 9891433344 <br/> +91 6375807780 </p>
                </div>
                </li>
                
                <li>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <div className="contact-list-details">
                <h4>Office Hour</h4>
                <p>Mon-Sun: 9:00 Am – 10:00 Pm</p>
                </div>
                </li>

              </ul>
            </div>
          </Col>
          <Col lg={8} xs={12}>
                
              <div className="contact-section-title">
                <span>Let's get in touch</span>
                <h2>Need Consultancy, Let's get in touch Now!</h2>
                <p>We are available here 24*7 for you to reach out to us incase you have any queries or any doubts you have regading our services or our website. We'll resolve all of your queries. </p>
              </div>

              <div className="contact-form">
                <form>
                  <div className="contact-form form-style">
                    <Row>
                    <Col lg={6} xs={12}>
                      <input className="form-control" type="text" placeholder="Your Name*" id="contactName" name="contactName" value="" />
                      <p></p>
                    </Col>
                    <Col className="col" lg={6}>
                      <input className="form-control" type="number" placeholder="Phone" id="contactNumber" name="contactNumber" value=""   />
                      <p></p>
                    </Col>
                    <Col lg={6} xs={12}>
                      <input className="form-control" type="email" placeholder="Your Email" id="contactEmail" name="contactEmail" value="" />
                      <p></p>
                    </Col>
                    <Col className="col" lg={6}>
                    <select className="form-control" name="contactSubject">
                      <option disabled value="">Select Subject</option>
                      <option value="Services">Services</option>
                      <option value="Earnings">Earning Opportunity </option>
                      <option value="Website">Website Issue</option>
                      <option value="Others">Others</option>
                    </select>
                    <p></p>
                    </Col>
                    <Col xs={12} sm={12} >
                    <textarea className="contact-textarea form-control" placeholder="Message" name="contactDesc" spellCheck="false" style={{ marginTop: "0px", marginBottom: "0px" , height: "149px"}}></textarea>
                    <p></p>
                    </Col>
                    <Col xs={12}>
                      <button type="submit" className="btn-theme">
                        Submit Query
                      </button>
                    </Col>
                    </Row>
                   
                  </div>
                </form>
              </div>
            
          </Col>
        </Row>
      </Container>
    </section>

    <section className="contact-map-section section-padding">
      <Container>
        <div style={{width:"100%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.561001082242!2d75.95198552509873!3d26.862827832596192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db990d4cf6555%3A0xb8bcbd8565da2f62!2sKanota%2C%20Rajasthan%20303012!5e0!3m2!1sen!2sin!4v1607442098617!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{border:"0"}} allowFullScreen title="Our Office" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </Container>
    </section>
    </>
   )
  }


export default Contact