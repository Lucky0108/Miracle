import React, { useState, useEffect } from 'react';
import PageTitle from '../../Components/UI/PageTitle';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Input from '../../Components/UI/Input'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../actions/auth.action';
import { Redirect, NavLink } from 'react-router-dom';
import { toastr } from 'react-redux-toastr'

/**
* @author
* @function Signup
**/

const Signup = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  // const toastr = useSelector(state => state.toastr)
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const signupSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, password, contact }
    dispatch(signup(userData))
  }

  useEffect(() => {
    if (auth.loading) {
      toastr.info('Loading...')
    }
    if (auth.message) {
      toastr.success("Success", auth.message);
      auth.message = ""
      setFirstName(''); setLastName(''); setEmail(''); setPassword(''); setContact('');
      <Redirect to='/user/login' />
    }
    if (auth.error) {
      toastr.error("Error", auth.error)
      auth.error = ""
    }
  }, [auth])
  // useEffect(() => {
  //   if(user.loading === true){
  //     toastr.info('Loading...')
  //    } else if(user.loading === "Done") {
  //      toastr.success('Congratulations', user.message)
  //      setFirstName('')
  //      setLastName('')
  //      setEmail('')
  //      setPassword('')
  //      user.message = '';
  //      user.loading = '';
  //      return <Redirect to={'/login'} />
  //    } else if(user.loading === "Failed") {
  //      toastr.error('Error', user.error)
  //      user.loading = ""
  //      user.error = ""
  //    }

  // }, [user, user.loading, user.message, user.error])

  if (auth.authenticate) {
    return <Redirect to={'/blogs'} />
  }



  return (
    <>
      <PageTitle title="Signup" para="Hey There! Looks Like You Have Finally Decided To Join Us And Become Part Of An Amazing Community." />
      <div className="signup-section section-padding">
        <Container >
          <Row>
            <Col lg={12}>
              <Card className="login-card">
                <Card.Body>
                  <h3 className="text-center">Signup</h3>
                  <Form onSubmit={signupSubmit}>
                    <Input
                      controlId="firstName"
                      title="First Name"
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required={true}
                    />

                    <Input
                      controlId="lastName"
                      title="Last Name"
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required={true}
                    />

                    <Input
                      controlId="signupEmail"
                      title="Email address"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      message="We'll never share your email with anyone else."
                      required={true}
                    />

                    <Input
                      controlId="signupContact"
                      title="Contact"
                      type="text"
                      placeholder="Enter Contact Number"
                      value={contact}
                      onChange={e => setContact(e.target.value)}
                    />

                    <Input
                      controlId="signupPassword"
                      title="Password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required={true}
                    />

                    <Button variant="primary" type="submit">
                      Submit
                  </Button>
                  </Form>
                  <div className="confirmDiv"> Already a user? <NavLink to="/admin/login"> Login </NavLink></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}


export default Signup