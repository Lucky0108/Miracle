import React from 'react'
import { Col } from 'react-bootstrap'

/**
* @author
* @function HomeGrid
**/

const HomeGrid = (props) => {
    return (
        <>
            <Col className="col" lg={props.lg} xs={props.xs} md={props.md} sm={props.sm} >
                <div className={props.completeGridsClass}>
                    <div className={props.gridClass}>
                        <div className={props.iconDiv}>
                        <i className={`fa fa-code ${props.extraFontClass}`} aria-hidden="true" />
                        </div>
                        <h3>
                            Web Development
                        </h3>
                        <p>Get Yourself a Professional Website Developed.</p>
                    </div>
                    <div className={props.gridClass}>
                    <div className={props.iconDiv}>
                        <i className={`fa fa-users ${props.extraFontClass}`} aria-hidden="true" />
                        </div>
                        <h3>
                            Marketing
                        </h3>
                        <p>Earn Some Money With Us Doing Marketing Campaigns.</p>
                    </div>
                    <div className={props.gridClass}>
                    <div className={props.iconDiv}>
                        <i className={`fa fa-star ${props.extraFontClass}`} aria-hidden="true" />
                        </div>
                        <h3>
                            SEO Optimization
                        </h3>
                        <p>List Your Website In Top Pages With An Expert.</p>
                    </div>
                </div>
            </Col>
        </>
    )
}


export default HomeGrid