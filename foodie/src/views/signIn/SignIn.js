import React , {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message} from 'semantic-ui-react'
import axios from 'axios'

const url = 'https://food-app-timesinternet.herokuapp.com/api/customer'
const SignIn = () =>  {
      const [signInMessage , setSignInMessage] = useState(false) 
      const [errorSignInMessage ,setErrorSignInMessage ] =useState(false)
      const [userDetails ,setUserDetails] = useState({restaurantId : 3}) 
      const changeHandler = (e) => {
          setUserDetails({...userDetails , [e.target.placeholder] : e.target.value})
          console.log(userDetails)
      }
      const signInUser = () => {
          const promise = axios.post( `${url}`,userDetails)
          promise.then((res) => {
           console.log(res)
           document.getElementById('registerUserName').value=""
           document.getElementById('registerEmailId').value=""
           document.getElementById('registerPassword').value=""
           setSignInMessage(true)
           setTimeout(()=>{setSignInMessage(false)},3000)
      }).catch((err) => {
        document.getElementById('registerUserLastName').value=""
        document.getElementById('registerUserFirstName').value=""
        document.getElementById('registerEmailId').value=""
        document.getElementById('registerPassword').value=""
        setErrorSignInMessage(true)
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
      <Form className='center'>
          <Form.Input fluid icon='user' id="registerUserFirstName" iconPosition="left"  placeholder="firstName"  onChange={changeHandler} />
          <Form.Input fluid icon='user' id="registerUserLastName" iconPosition="left"  placeholder="lastName"  onChange={changeHandler} />
          <Form.Input fluid icon='user' id="registerEmailId" iconPosition='left' placeholder='email'  onChange={changeHandler}  />
          <Form.Input icon='lock' iconPosition='left' id="registerPassword" className="demo" placeholder='password' type='password'  onChange={changeHandler} />
          <Button color='teal' fluid size='medium' onClick={signInUser}>
            Sign Up
          </Button>
      </Form>
    </Grid.Column>
  </Grid>
  </> 
    )}

export default SignIn