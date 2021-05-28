/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './UserBlogs.css'
import { Container, Row, Col } from 'react-bootstrap';
// import user from '../../../img/profile.jpg'
import blogImg from "../../../img/blog-img.webp";
import BlogList from "../../../Components/UI/Blog/BlogList";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogByUser } from '../../../actions/blog.action';
import { api } from '../../../urlConfig';

/**
* @author
* @function UserBlogsProfile
**/

const UserBlogsProfile = ({ match }) => {

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  const [largeScreen, setLargeScreen] = useState(true);

  const changeScreenElements = () => {
    if (window.screen.width < 736) {
      setLargeScreen(false)
    } else if (window.screen.width > 736) {
      setLargeScreen(true)
    }
  }

  const renderLargeScreenElements = (fullName, funFact, totalBlogs, followers, followings) => {
    return (
      <>
        {/* Display For Large Devices */}
        <div className="user-profile-info-details large">
          <ul>
            <li> <span> {totalBlogs} </span> <a>Blogs</a>  </li>
            <li> <span> {followers} </span> <a>Followers</a> </li>
            <li> <span> {followings} </span> <a>Following</a> </li>
          </ul>
        </div>
        <div className="user-profile-info-name large">
          <h1> {fullName} </h1>
          <br />
          <span> {funFact} </span>
        </div>
      </>
    )
  }

  const renderSmallScreenElements = (fullName, funFact, totalBlogs, followers, followings) => {
    return (
      <>
        {/* Display For Small Devices */}
        <div className="user-profile-info-name small">
          <h1> {fullName} </h1>
          <br />
          <span> {funFact} </span>
        </div>
        <div className="user-profile-info-details small">
          <ul>
            <li> <span> {totalBlogs} </span> <a>Blogs</a>  </li>
            <li> <span> {followers} </span> <a>Followers</a> </li>
            <li> <span> {followings} </span> <a>Following</a> </li>
          </ul>
        </div>
      </>
    )
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

  const renderUserDetails = () => {
    if (blogs.blogList[0] && blogs.blogList[0].author) {
      // Destructring user details
      const { _id, firstName, lastName, user_name, funFact, followers, followings } = blogs.blogList[0].author;
      let fullName = `${firstName} ${lastName}`;
      let totalBlogs = blogs.blogList.length;
      let followersCount = followers.length;
      let followingsCount = followings.length;
      return (
        <Row className="user-profile-info-row">
          <Col lg={4} md={4} xs={3}>
            <div className="user-profile-image-div">
              <div className="user-profile-image">
                <img
                  // src={user}
                  src={`${api}/user/profile/${_id}`}
                  alt="Profile" />
              </div>
            </div>
          </Col>

          <Col lg={8} md={8} xs={9}>
            <div className="user-profile-info-div">
              <div className="user-profile-info">
                <div className="user-profile-info-username">
                  <h2> {user_name} </h2>
                  {/* <button className="btn btn-primary">Follow</button> */}
                  <button className="btn followed-btn">Following &nbsp; <i className="fas fa-check"></i></button>
                </div>
                {largeScreen ? renderLargeScreenElements(fullName, funFact, totalBlogs, followersCount, followingsCount) : ''}
              </div>
            </div>
          </Col>

          {!largeScreen ? renderSmallScreenElements(fullName, funFact, totalBlogs, followersCount, followingsCount) : ''}

          <div className="user-profile-blog-list">
            <Row>
              <div className="blog-pg-section">
                <div className="blog-content">
                  {renderUserBlogList()}
                </div>
              </div>
            </Row>
          </div>
        </Row>
      )
    }
  }

  return (
    <>
      <section className="user-profile-blogs section-padding">
        <Container>
          {blogs.loading ? <h3 className="alert-info p-5">Loading...</h3> :
            renderUserDetails()}
        </Container>
      </section>
    </>
  )
}


export default UserBlogsProfile