import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PageTitle from '../../Components/UI/PageTitle'
import './Contact.css'
import ContactInfoList from '../../Components/UI/ContactInfoList'
import { useDispatch, useSelector } from 'react-redux'
import { queryAction } from '../../actions/query.action'
import { toastr } from 'react-redux-toastr'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'

/**
* @author
* @function Contact
**/

const Contact = (props) => {

  const dispatch = useDispatch();
  const query = useSelector(state => state.query)

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const querySubmit = (e) => {
    e.preventDefault();

    const details = { name, phone, email, service, message }
    dispatch(queryAction(details));
  }

  useEffect(() => {
    if (query.loading) {
      toastr.info("Loading...")
      query.loading = "";
    }

    if (query.message) {
      toastr.success("Success", query.message)
      query.message = "";
    } else if (query.error) {
      toastr.error("Error", query.error)
      query.error = "";
    }
  }, [query, query.loading, query.message, query.error])

  return (
    <>
      <PageTitle title="Contact Us" para="Confused About Something Or Having A Query? Don't Hesitate, Just Reach Out To Us And We'll Help You Out With All Of Your Problems." />
      <section className="contact-section section-padding">
        <Container>
          <Row>
            <Col lg={4} xs={12}>
              <div className="contact-info">
                <ul>

                  <ContactInfoList iconName="fa-home" heading="Head Office" para="Near Kanota, Agra Road, Jaipur, Rajasthan 303012" />
                  <ContactInfoList iconName="fa-envelope-o" heading="Email Address" para={<a href="mailto:softcopyofficialteam@gmail.com"> softcopyofficialteam@gmail.com </a>} />
                  <ContactInfoList iconName="fa-phone" heading="Telephone" para={<><p><a href="tel:+919891433344">+91 9891433344</a></p> <p><a href="tel:+916375807780">+91 6375807780 </a> </p></>} />
                  <ContactInfoList iconName="fa-clock-o" heading="Office Hour" para="Mon-Sun: 9:00 Am – 10:00 Pm" />

                </ul>
              </div>
            </Col>
            <Col lg={8} xs={12}>

              <HomeHeading class="contact-section-title" span="Let's get in touch" h2="Need Consultancy, Let's get in touch Now!" p="We are available here 24*7 for you to reach out to us incase you have any queries or any doubts you have regading our services or our website. We'll resolve all of your queries. " />

              <div className="contact-form">
                <form onSubmit={querySubmit}>
                  <div className="contact-form form-style">
                    <Row>
                      <Col lg={6} xs={12}>
                        <input className="form-control" type="text" placeholder="Your Name" id="contactName" name="contactName" value={name} onChange={e => setName(e.target.value)} required />
                        <p></p>
                      </Col>
                      <Col className="col" lg={6}>
                        <input className="form-control" type="number" placeholder="Phone (10 Digits without country code)" id="contactNumber" name="contactNumber" value={phone} onChange={e => setPhone(e.target.value)} />
                        <p></p>
                      </Col>
                      <Col lg={6} xs={12}>
                        <input className="form-control" type="email" placeholder="Your Email" id="contactEmail" name="contactEmail" value={email} onChange={e => setEmail(e.target.value)} required />
                        <p></p>
                      </Col>
                      <Col className="col" lg={6}>
                        <select className="form-control" name="contactSubject" value={service} onChange={e => setService(e.target.value)} required>
                          <option selected disabled value="">Select Service</option>
                          <option value="Earnings">Earning Opportunity </option>
                          <option value="Website">Website Issue</option>
                          <option value="Others">Others</option>
                        </select>
                        <p></p>
                      </Col>
                      <Col xs={12} sm={12} >
                        <textarea className="contact-textarea form-control" placeholder="Message (upto 250 words)" name="contactDesc" minLength="20" spellCheck="false" style={{ marginTop: "0px", marginBottom: "0px", height: "149px" }} value={message} onChange={e => setMessage(e.target.value)} required />
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
          <div style={{ width: "100%" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7118.561001082242!2d75.95198552509873!3d26.862827832596192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db990d4cf6555%3A0xb8bcbd8565da2f62!2sKanota%2C%20Rajasthan%20303012!5e0!3m2!1sen!2sin!4v1607442098617!5m2!1sen!2sin" width="100%" height="600" frameBorder="0" style={{ border: "0" }} allowFullScreen title="Our Office" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </Container>
      </section>
    </>
  )
}


export default Contact