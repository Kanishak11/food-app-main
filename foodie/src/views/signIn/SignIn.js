import React , {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message} from 'semantic-ui-react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const SignIn = () =>  {
      const {id} = useParams()
      const [signInMessage , setSignInMessage] = useState(false) 
      const [errorSignInMessage ,setErrorSignInMessage ] =useState(false)
      const [userDetails ,setUserDetails] = useState({restaurantId : id}) 
      const changeHandler = (e) => {
          setUserDetails({...userDetails , [e.target.placeholder] : e.target.value})
          console.log(userDetails)
      }
      const signInUser = () => {
          const promise = axios.post('api/customer',userDetails)
          promise.then((res) => {
           setSignInMessage(true)
           setTimeout(()=>{setSignInMessage(false)},3000)
      }).catch((err) => {
        setErrorSignInMessage(true)
        setUserDetails({...userDetails, firstName: " " ,lastName : " " ,email : " " ,password : ""} )
        setTimeout(()=>{setErrorSignInMessage(false)},3000)
        console.log(err)})
      }
    return (
    <>
    {signInMessage && <Message>Sign IN Successfull</Message>}
    {errorSignInMessage && <Message> Sign in Failed</Message>}

  <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Sign in to your account
      </Header>
     
      <Form className='center' onSubmit={signInUser} >
          <Form.Input fluid icon='user' id="registerUserFirstName" iconPosition="left"  placeholder="firstName" name="" onChange={changeHandler} value={userDetails.firstName} />
          <Form.Input fluid icon='user' id="registerUserLastName" iconPosition="left"  placeholder="lastName"  onChange={changeHandler} value={userDetails.lastName} />
          <Form.Input fluid icon='user' id="registerEmailId" iconPosition='left' placeholder='email'  onChange={changeHandler} value={userDetails.email} />
          <Form.Input icon='lock' iconPosition='left' id="registerPassword" className="demo" placeholder='password' type='password'  onChange={changeHandler} value={userDetails.password} />
          <Button type ="submit" color='teal' fluid size='medium'>
            Sign Up
          </Button>
      </Form>\
  
    </Grid.Column>
  </Grid>
  </> 
    )}

export default SignIn