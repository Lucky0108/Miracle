import React, { useState }  from 'react';
import PageTitle from '../../Components/PageTitle';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import Input from '../../Components/UI/Input'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../actions/userSignup.action';
import { Redirect } from 'react-router-dom';
import {toastr} from 'react-redux-toastr'

/**
* @author
* @function Signup
**/

const Signup = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const toastr = useSelector(state => state.toastr)
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch();

  const signupSubmit = (e) => {   
    e.preventDefault();
    const userData = { firstName, lastName, email, password }
    dispatch(signup(userData))
  }

  if(auth.authenticate) {
   return <Redirect to={'/'} />
  }

  if(user.loading === true){
   toastr.info('Loading...')
  } else if(user.loading === "Done") {
    toastr.success('Congratulations', user.message)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    user.message = '';
    user.loading = '';
    return <Redirect to={'/'} />
  } else if(user.loading === "Failed") {
    toastr.error('Error', user.message || user.error)
  }

 

  return(
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
                      onChange = {e => setFirstName(e.target.value)}
                      required = {true}
                    />

                    <Input 
                      controlId="lastName"
                      title="Last Name"
                      type="text"
                      placeholder="Enter last name"
                      value={lastName} 
                      onChange = {e => setLastName(e.target.value)}
                      required={true}
                    />

                    <Input 
                      controlId="signupEmail"
                      title="Email address"
                      type="email"
                      placeholder="Enter email"
                      value={email} 
                      onChange = {e => setEmail(e.target.value)}
                      message = "We'll never share your email with anyone else."
                      required={true}
                    />

                    <Input
                      controlId="signupPassword"
                      title="Password"
                      type="password" 
                      placeholder="Password"
                      value={password}
                      onChange= {e => setPassword(e.target.value)}
                      required={true} 
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


export default Signup