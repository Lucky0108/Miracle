import React, { useState } from 'react'
import PageTitle from '../../Components/PageTitle'
import './Login.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import Input from '../../Components/UI/Input'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/auth.action'
import { Redirect } from 'react-router-dom'

/**
* @author
* @function Login
**/

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    dispatch(login(user))
  }
  
  if(auth.authenticate) {
    return <Redirect to={"/about"} />
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
                      placeholder="Enter email" 
                      value={email} 
                      onChange = {e => setEmail(e.target.value)}
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