/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './UserBlogs.css'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import blogImg from "../../../img/blog-img.webp";
import BlogList from "../../../Components/UI/Blog/BlogList";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogByUser } from '../../../actions/blog.action';
import { api } from '../../../urlConfig';
import { followRequest, unfollowRequest } from '../../../actions/user.action';
import { toast } from 'react-toastify';

/**
* @author
* @function UserBlogsProfile
**/

const UserBlogsProfile = ({ match }) => {

  const toastId = React.useRef(null);

  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs);
  const auth = useSelector(state => state.auth);
  const [largeScreen, setLargeScreen] = useState(true);

  // Modal State
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeScreenElements = () => {
    if (window.screen.width < 736) {
      setLargeScreen(false)
    } else if (window.screen.width > 736) {
      setLargeScreen(true)
    }
  }

  const sendFollowRequest = (authorId, authorName, authorUserName) => {
    if(!auth.user._id) {
      handleShow()
    } else {
      const authorBody = { _id: JSON.parse(authorId), fullName: authorName, user_name: authorUserName }
      dispatch(followRequest(auth.user._id, authorBody))
    }
  }

  const sendUnfollowRequest = (authorId) => {
    const authorBody = { _id: JSON.parse(authorId)}
    dispatch(unfollowRequest(auth.user._id, authorBody))
  }

  const checkFollowButtonRender = (authorId, authorName, authorUserName, authorFollowers) => {
    let isFollowing = false; // To Check Follow Button Condition
    let profileId = JSON.stringify(auth.user._id);
    authorId = JSON.stringify(authorId);
     
    if(authorFollowers && authorFollowers.length !== 0) {
      for(let i=0; i<authorFollowers.length; i++) {
        let followerId = JSON.stringify(authorFollowers[i]._id);

        // Check If The LoggedIn User Is Already In Profile Page User Followers List
        if(followerId === profileId) {
          isFollowing = true;
          break;
        }
      }
    }

    if(profileId && authorId === profileId) {
      return <button className="button btn followed-btn"><a href="/user/profile">Edit Profile &nbsp; <i className="fas fa-user"></i></a></button>
    }

    if(!auth.user._id || !isFollowing) {
      return <button onClick={() => {sendFollowRequest(authorId, authorName, authorUserName)}} className="btn btn-primary">Follow</button>
    } else if(isFollowing) {
      return <button onClick={() => {sendUnfollowRequest(authorId)}} className="btn followed-btn">Following &nbsp; <i className="fas fa-check"></i></button>
    }
  }

  const renderLargeScreenElements = (fullName, funFact, totalBlogs, followersCount, followingsCount) => {
    return (
      <>
        {/* Display For Large Devices */}
        <div className="user-profile-info-details large">
          <ul>
            <li> <span> {totalBlogs} </span> <a>Blogs</a>  </li>
            <li> <span> {followersCount} </span> <a>Followers</a> </li>
            <li> <span> {followingsCount} </span> <a>Following</a> </li>
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

  const renderSmallScreenElements = (fullName, funFact, totalBlogs, followersCount, followingsCount) => {
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
            <li> <span> {followersCount} </span> <a>Followers</a> </li>
            <li> <span> {followingsCount} </span> <a>Following</a> </li>
          </ul>
        </div>
      </>
    )
  }

  useEffect(() => {

    dispatch(getBlogByUser(match.params.userId));
    changeScreenElements();

    if (auth.loading) {
      toastId.current =  toast.info("❕ Loading...",{autoClose: false})
    }
    if (auth.message) {
      toast.dismiss(toastId.current);
      toast.success(`✔ ${auth.message}`, {autoClose: 2000})
      auth.message = "";
    } else if (auth.error) {
      toast.dismiss(toastId.current);
      toast.error(`❌ ${auth.error}`, {autoClose: 2000})
      auth.error = "";
    }

  }, [dispatch, match.params.userId, auth, auth.message, auth.error])

  const renderUserBlogList = () => {
    return (
      blogs.blogList.map((data, index) => {
        const { _id, date, author, title, description, category, slug } = data;
        return (
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
                  {/* Passing Id And Followers List Of Author */}
                  {checkFollowButtonRender(_id, firstName, user_name, followers)}
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
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sorry, You need to be LoggedIn to follow someone! 
          <br />
          <hr />
          <div className="d-flex justify-content-between">
          <a href="/user/login"> Login Here</a> OR <a href="/user/signup">Signup Here</a> 
          </div>
        
        </Modal.Body>
      </Modal>
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