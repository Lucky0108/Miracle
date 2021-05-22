import React from 'react'
import './Blog.css'
import PageTitle from '../../Components/UI/PageTitle'
import { Col, Container, Row } from 'react-bootstrap'
import blogImg from '../../img/blog-img.webp'
import logo from '../../img/logo.webp'
import BlogList from '../../Components/UI/Blog/BlogList'
import BlogCategories from '../../Components/UI/Blog/BlogCategories'
import BlogRecent from '../../Components/UI/Blog/BlogRecent'

/**
* @author
* @function BlogPg
**/

const BlogPg = (props) => {
    return (
        <>
            <PageTitle title="Blog" para="This is where you can read all the blogs written on our website by our fellow members." />
            <section className="blog-pg-section section-padding">
                <Container>
                    <Row>
                        <Col lg={8} xs={12}>
                            <div className="blog-content">
                                <BlogList blogImg={blogImg} cat="SEO, SMM" date="December 26, 2020" author="Admin" heading="Search engine optimization but I didn’t know where to begin contacted SEO Services USA" para="Samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with Collection of textile" link="/blogpg" />
                                <BlogList blogImg={blogImg} cat="SEO, SMM" date="December 26, 2020" author="Admin" heading="Search engine optimization but I didn’t know where to begin contacted SEO Services USA" para="Samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with Collection of textile" link="/blogpg" />
                                <BlogList blogImg={blogImg} cat="SEO, SMM" date="December 26, 2020" author="Admin" heading="Search engine optimization but I didn’t know where to begin contacted SEO Services USA" para="Samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with Collection of textile" link="/blogpg" />
                                <BlogList blogImg={blogImg} cat="SEO, SMM" date="December 26, 2020" author="Admin" heading="Search engine optimization but I didn’t know where to begin contacted SEO Services USA" para="Samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with Collection of textile" link="/blogpg" />
                                <BlogList blogImg={blogImg} cat="SEO, SMM" date="December 26, 2020" author="Admin" heading="Search engine optimization but I didn’t know where to begin contacted SEO Services USA" para="Samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with Collection of textile" link="/blogpg" />
                            </div>
                        </Col>
                        <Col lg={4} md={8} xs={12} className="blog-pg-right-side">
                            <div className="blog-sidebar">
                                <div className="widget about-widget">
                                    <h3>About Us</h3>
                                    <div className="img-holder">
                                        <img src={logo} alt="Miracle Solutions" />
                                    </div>
                                    <p> This is the Blog Section of Miracle Solutions. Enjoy Awesome Content Here!  </p>
                                    <div className="socials">
                                        <ul className="clearfix">
                                            <li><a href="https://www.facebook.com/themiraclesolutions/"><i className="fab fa-facebook-f"></i></a> </li>
                                            <li><a href="https://twitter.com/MiracleSolutio8"><i className="fab fa-twitter"></i></a> </li>
                                            <li><a href="https://linkedin.com/in/lakshay-yadav"><i className="fab fa-linkedin-in"></i></a> </li>
                                            <li><a href="https://instagram.com/the_miracle_solutions"><i className="fab fa-instagram"></i></a> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget search-widget">
                                    <h3>Search</h3>
                                    <form>
                                        <div>
                                            <input type="text" placeholder="Search Post..." className="form-control" />
                                            <button type="submit">
                                            <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="widget category-widget">
                                    <h3>Categories</h3>
                                    <ul>
                                        <BlogCategories link="/blog" title="Digital Marketing" total="(2)" />
                                        <BlogCategories link="/blog" title="Web Development" total="(3)" />
                                        <BlogCategories link="/blog" title="SEO Optimization" total="(5)" />
                                        <BlogCategories link="/blog" title="Web Analytics" total="(7)" />
                                        <BlogCategories link="/blog" title="Startup Business" total="(10)" />

                                    </ul>
                                </div>

                                <div className="widget recent-post-widget">
                                    <h3>Recent Post</h3>
                                    <div className="posts">
                                        <BlogRecent date="13 Feb 2020" heading="Salesman and above it there hung a picture that he" link="/blog" img="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFODg0RUI5NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFODg0RUI4NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY3M0RGMDNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY3M0RGMTNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAEQARAMBEQACEQEDEQH/xACEAAABBQEBAAAAAAAAAAAAAAAGAgMEBQcBAAEAAgMBAAAAAAAAAAAAAAAAAAMBAgQFEAABAwIEAwYDBwUAAAAAAAABEQIDAAQhMRIFQVEGYXEiMkITFBUHgZGhYnIjJPCxUoI1EQACAgMBAAMBAQEAAAAAAAAAARECITEDEmEiBEFRE//aAAwDAQACEQMRAD8AxCkFz1ADgicFeitai95qJLQSHRzXLWktQtwGOdRMExJFkiLSRklTJVoehv54dQahaWppUgBwCa8ExTDGiC1btDMsxlcXFobyDQgA5UQVbkbqSDtAHaAFBAC45NCmgk0DYOi3zbRFPfRujknbrbDkQ0+UuXilZOnaHg38fzTWWUe6bTbWl26GaOSN3pdqRRzq9OjaF9OSTKu5hiChhBaMMaYmJsiC5oBKoeSZCrimILcCeAqQEUEHqAFUAX/Q2yfOOpLa2ezXaw/yLscNEZVrT+pyCl9bRUdwp6t8Gz327bfaXYsGRy7lu7mmQ7dZMEskbB65T5Ix+o0ivPB0LdcwUl/Fse/wSxyROjurYpNbSt9q5gcclBzB55GoiNEOLYZnXUezTbbciMnVE4LFIRiRxXup1LSY+tPLKRyDB4XuFNEkcxlzsMudBU5I3SA0DvNSA2mNBAugA5+j12I+qZbVxIZd27tRAwAj8Wou9IatK7LCNf5H9mvgKd+vz0kxrdpE1sb15nkuxGZPdQ6QXv5asEpHmxvp050mVJJsNxf1PBHf3MJh3SyJjF0xunU31RuHFp4tP2VNvSxYLKlkrUZE6p2yO720xvAErPHE7k4cO45Uqt/LKX5+kZXcNMUuk4aTx5ZfhW5HLeBLmhVLc+GVSEDUreWZ4KpoIGkaunsz7akgVDDNPNHBAwyzzOEcUTcXOe4o0DvNEglOEbD0b01B07bi0vUG53xHxc48rQPLCx3+LcyeJrF06en8HV4cfC+Qvk2C2uvZiumCYQFYiVIaTmlWraywmTbnW20Qr+Oe1t3RO0WcbmSRujtz+4Dq8ErZcNJ05jTnVL3z/rLV54jS+AS3rc26NIdiP6xpCyMbhGc7h+5PK9DpDvwNdCjwcnqssk7Iy1uDLDcNVxa0scfyuAPd4ajpKGcEnhlRcOYbmZsGMIe4Rnm1cKatZM9olxoa9s5LjyqSouGaWCaOeF5jmhcJIpGlHNc0qCO40NAnGTY+in7n1Dsj7/dZHCSeRzI9CaHRx4GQM9Bc5awdeaThHX/P0dq+rGgWxEcKHJgT7AEFTXBd5BXqGWWV5Q4cKTZyxqWADvbeQzLIuhVqaibibaw2q72beYn3LIbyNrZYYSQHyCMEo1cwuYptW00JtVOrQDtlewHSUJBGHI1sg5ytAy0oSPuqxQ4pVeNACqANP+me0/FbPHdR31xDLFLI0GIoInA+VDgcCuPOsvV/Y6/5LL/lG8moWrTBbaZZXTkDxSvTUT2ogqui5S7kYFc458KRZDJAHqm8jjURlDwAq1FkR0ZSbDGTbbhevCj2nsa493CnXeUhPNYbBgsIia8jzEj7q0zkwxgYOZSrFD3bQB2gDWvpd1Bslt0220fIyO7hlkdPG4hrnF7la/HMEVl64tLOl+Wy8R/S13j6hbVbgtE7E5NK/wBqT9raQ93rXbBqTqa93hjnbe39oHS55OIPa3MVFqedkV6KympD+SXF4/8AkOLjx4ChWjQOk7JG8W8e37HJDG1NTUcmQUoB/satTLK9cVBDcrN1vHDE4eJrFf3mtFLSzF0rCSKc5mnmY5xoAVQBw+2o1ovBaAHI9GvxJ2omfCoZK2EfQXxvz13sJ8J7Z+N1eXT6E/MuVJ7x5zs1fln1jX9NFg+H9/w+XinOsig6JUdW+z802r3v+Z7w1acvc9Ov7UpldOBPTanQL9WafjncsMvxq/IR32Cfq7FrWYRPGgg//9k=" author=" " />
                                        <BlogRecent date="13 Feb 2020" heading="Salesman and above it there hung a picture that he" link="/blog" img="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFODg0RUI5NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFODg0RUI4NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY3M0RGMDNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY3M0RGMTNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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" author=" " />
                                        <BlogRecent date="13 Feb 2020" heading="Salesman and above it there hung a picture that he" link="/blog" img="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFODg0RUI5NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFODg0RUI4NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY3M0RGMDNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY3M0RGMTNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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" author=" " />
                                    </div>
                                </div>

                                <div className="widget tag-widget">
                                    <h3>Tags</h3>
                                    <ul>
                                        <BlogCategories link="/blog" title="Hosting" />
                                        <BlogCategories link="/blog" title="Business" />
                                        <BlogCategories link="/blog" title="Server" />
                                        <BlogCategories link="/blog" title="Vps Hosting" />
                                        <BlogCategories link="/blog" title="Manufacturing" />
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default BlogPg