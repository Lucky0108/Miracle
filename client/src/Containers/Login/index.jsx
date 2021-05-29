import React, { useEffect, useState } from 'react'
import PageTitle from '../../Components/UI/PageTitle'
import './Login.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import Input from '../../Components/UI/Input'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/auth.action'
import { NavLink, Redirect } from 'react-router-dom'
import {toastr} from 'react-redux-toastr'

/**
* @author
* @function Login
**/

const Login = (props) => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();

    const userData = { user, password };

    dispatch(login(userData))
  }

  useEffect(() => {
    if(auth.message) {
      toastr.success("Success", auth.message)
      auth.message = ''
    }
    if(auth.error) {
      toastr.error("Error", auth.error);
      auth.error = "";
    }
  },[auth])

  if(auth.authenticate) {
    return <Redirect to={"/blogs"} />
  }

  return (
    <>
      <PageTitle title="Login" para="Hey There! Good To See You're Visiting Us Back. Login and get back on the amazing Journey." />
      <div className="login-section section-padding">
        <Container >
          <Row>
            <Col lg={12}>
              <Card className="login-card">
                <Card.Body>
                  <h3 className="text-center">Login</h3>
                  <Form onSubmit={loginSubmit}>
                    <Input
                      controlId="loginEmail"
                      title="Email address"
                      type="email" 
                      placeholder="Enter Your Email / Phone" 
                      value={user} 
                      onChange = {e => setUser(e.target.value)}
                    />

                    <Input
                      controlId="loginPassword"
                      title="Password"
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={e => setPassword(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                      Submit
                  </Button>
                  </Form>
                 <div className="confirmDiv"> Not a user yet? <NavLink to="/user/signup"> Sign up </NavLink></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}


export default Login