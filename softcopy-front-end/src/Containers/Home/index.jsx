import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import sec1 from '../../img/cloud.png'
import './Home.css'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>
      <div className="section1" style={{ background: `url(${sec1}) 80px 125px/auto no-repeat local` }}>
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
    </>
  )
}


export default Home