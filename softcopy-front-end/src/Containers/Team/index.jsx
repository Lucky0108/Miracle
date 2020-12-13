import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from '../../Components/UI/PageTitle'
import './Team.css'
import HomeHeading from '../../Components/UI/Home/HomeHeadings'
import img1 from '../../img/img-team.jpg'
import TeamGrid from '../../Components/UI/TeamGrid'

/**
* @author
* @function Team
**/

const Team = (props) => {
    return (
        <>
           <PageTitle title="Team" para="This is where you'll learn about our team members and their positions." />
           <section className="section-padding team-section">
           <Container>
                <Row>
                    <Col className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                        <HomeHeading class="team-section-heading clearfix" span="Our Team" h2="Meet our professional team members" p="These are the people behind all this hard work." />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-xs-12">
                        <div className="team-grids">
                            <TeamGrid imgSrc={img1} name="Lakshay Yadav" desig="Managing Director" instaLink="https://instagram.com/instagram" facebookLink="https://instagram.com/instagram" twitterLink="https://instagram.com/instagram" linkedinLink="https://instagram.com/instagram" />
                            <TeamGrid imgSrc={img1} name="Umashankar Sarswat" desig="Managing Director" instaLink="https://instagram.com/instagram" facebookLink="https://instagram.com/instagram" twitterLink="https://instagram.com/instagram" linkedinLink="https://instagram.com/instagram" />
                            <TeamGrid imgSrc={img1} name="Nipun Goyal" desig="SEO Specialist" instaLink="https://instagram.com/instagram" facebookLink="https://instagram.com/instagram" twitterLink="https://instagram.com/instagram" linkedinLink="https://instagram.com/instagram" />
                            <TeamGrid imgSrc={img1} name="Janck Meker" desig="Empty Designation" instaLink="https://instagram.com/instagram" facebookLink="https://instagram.com/instagram" twitterLink="https://instagram.com/instagram" linkedinLink="https://instagram.com/instagram" />
                        </div>
                    </Col>
                </Row>
            </Container>
           </section>
        </>
    )
}


export default Team