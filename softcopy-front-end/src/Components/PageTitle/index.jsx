import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './PageTitle.css'
import pageTitleBg from '../../img/page-title-bg.png'


/**
* @author
* @function PageTitle
**/

const PageTitle = (props) => {
  return(
    <>
    <div className="page-title" style={{ background: `url(${pageTitleBg}) 50%/cover no-repeat local;` }}>
        <Container>
            <Row>
                <Col sm={12} className="col" >
                    <h2>{props.title}</h2>
                    <p>
                    {props.para}
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    </>
   )
  }


export default PageTitle