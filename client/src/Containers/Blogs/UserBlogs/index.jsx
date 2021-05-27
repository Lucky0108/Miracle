/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './UserBlogs.css'
import { Container, Row, Col } from 'react-bootstrap';
import user from '../../../img/profile.jpg'
import blogImg from "../../../img/blog-img.webp";
import BlogList from "../../../Components/UI/Blog/BlogList";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogByUser } from '../../../actions/blog.action';

/**
* @author
* @function UserBlogsProfile
**/

const UserBlogsProfile = ({ match }) => {

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);

  const changeScreenElements = () => {
    if (window.screen.width < 736) {
      let largeScreenElements = document.getElementsByClassName("large");
      while (largeScreenElements.length > 0) {
        largeScreenElements[0].parentNode.removeChild(largeScreenElements[0])
      }
    } else if (window.screen.width > 736) {
      let smallScreenElements = document.getElementsByClassName("small");
      while (smallScreenElements.length > 0) {
        smallScreenElements[0].parentNode.removeChild(smallScreenElements[0]);
      }
    }
  }

  // window.addEventListener('resize', changeScreenElements); // Consider Doing This Change Later

  useEffect(() => {

    dispatch(getBlogByUser(match.params.userId));
    changeScreenElements()

  }, [dispatch, match.params.userId])

  const renderUserBlogList = () => {
    return (
      blogs.blogList.map((data, index) => {
        const { _id, date, author, title, description, category, slug } = data;
        return (
          // <Col lg={} xs={6}>
            <BlogList
              key={index}
              id={index}
              date={date}
              blogImg={blogImg}
              category={category.name}
              author={author.firstName}
              heading={title}
              content={description}
              link={`/blog/${_id}/${slug}`}
              authorLink={`/blogs/user/${author._id}/${author.firstName}${author.lastName ? '-' + author.lastName : ''}`}
            />
          // </Col>
        );
      })
    )
  }

  return (
    <>
      <section className="user-profile-blogs section-padding">
        <Container>
          <Row className="user-profile-info-row">
            <Col lg={4} md={4} xs={3}>
              <div className="user-profile-image-div">
                <div className="user-profile-image">
                  <img src={user} alt="Profile" />
                </div>
              </div>
            </Col>

            {/* Display For Large Devices */}
            <Col lg={8} md={8} xs={9}>
              <div className="user-profile-info-div">
                <div className="user-profile-info">
                  <div className="user-profile-info-username">
                    <h2>lakshayy.yyadav</h2>
                    {/* <button className="btn btn-primary">Follow</button> */}
                    <button className="btn followed-btn">Following &nbsp; <i className="fas fa-check"></i></button>
                  </div>
                  <div className="user-profile-info-details large">
                    <ul>
                      <li> <span>256</span> <a>Blogs</a>  </li>
                      <li> <span>536</span> <a>Followers</a> </li>
                      <li> <span>502</span> <a>Following</a> </li>
                    </ul>
                  </div>
                  <div className="user-profile-info-name large">
                    <h1> Lakshay Yadav </h1>
                    <br />
                    <span>I am dead inside. -Michael Scott </span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Display For Small Devices */}
            <div className="user-profile-info-name small">
              <h1> Lakshay Yadav </h1>
              <br />
              <span>I am dead inside. -Michael Scott </span>
            </div>
            <div className="user-profile-info-details small">
              <ul>
                <li> <span>256</span> <a>Blogs</a>  </li>
                <li> <span>536</span> <a>Followers</a> </li>
                <li> <span>502</span> <a>Following</a> </li>
              </ul>
            </div>
            <div className="user-profile-blog-list">
              <Row>
                <div className="blog-pg-section">
                <div className="blog-content">
                  {blogs.loading ? <h3 className="alert-info p-5">Loading...</h3> :
                    renderUserBlogList()}
                </div>
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}


export default UserBlogsProfile