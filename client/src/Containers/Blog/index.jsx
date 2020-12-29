import React from 'react'
import './Blog.css'
import PageTitle from '../../Components/UI/PageTitle'
import { Col, Container, Row } from 'react-bootstrap'
import blogImg from '../../img/blog-img.jpg'
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
                        <Col lg={4} md={8} xs={12}>
                            <div className="blog-sidebar">
                                <div className="widget about-widget">
                                    <h3>About Us</h3>
                                    <div className="img-holder">
                                        <img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YyQzVCQ0U1MDhDMTFFQUEwNEJDNUM4NkEwOEYwQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YyQzVCQ0Y1MDhDMTFFQUEwNEJDNUM4NkEwOEYwQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjJDNUJDQzUwOEMxMUVBQTA0QkM1Qzg2QTA4RjBBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjJDNUJDRDUwOEMxMUVBQTA0QkM1Qzg2QTA4RjBBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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" alt=""></img>
                                    </div>
                                    <p>Picture Samples lay spread out on the Samsa was a travelling salesman and above it there hung a that he</p>
                                    <div className="socials">
                                        <ul className="clearfix">
                                            <li><a href="https://instagram.com"><i className="fab fa-facebook-f"></i></a> </li>
                                            <li><a href="https://instagram.com"><i className="fab fa-twitter"></i></a> </li>
                                            <li><a href="https://instagram.com"><i className="fab fa-linkedin-in"></i></a> </li>
                                            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a> </li>
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
                                        <BlogRecent date="13 Feb 2020" heading="Salesman and above it there hung a picture that he" link="/blog" img="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFODg0RUI5NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFODg0RUI4NTA4RDExRUFBRkQ1QTIzNUE3MEFDRDhEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY3M0RGMDNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY3M0RGMTNCMzYxMUVBOEVCQ0NFQjNDNjJBRTZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYI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" author=" " />
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