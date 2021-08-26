import React , {useState} from 'react'
import { Link ,useParams} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message} from 'semantic-ui-react'
import axios from 'axios'
import ModalForSignIN from '../../components/signin/SignIn'
import {details} from '../../actions/UserDetails'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom"


const LoginForm = () =>  {
  let history = useHistory()
  const {id} = useParams()
  const [message ,setMessage] =useState(false)
  const [successMessage ,setSuccessMessage] = useState(false)

  const dipatch = useDispatch();
  const [userDetails ,setUserDetails] = useState({}) 
  const changeHandler = (e) => {
    setUserDetails({...userDetails , [e.target.name] : e.target.value})
    
  }
  const loginUser = () => {
    const url = `api/customer/login?restaurantId=${id}`
    const promise = axios.post(`${url}`,userDetails)
    promise.then((res) => {
      console.log('login....')
      setSuccessMessage(true)
        dipatch(details(res.data))
        setTimeout( () => {setMessage(false)
          window.location.reload()
        }, 1000);
    }).catch((err) => {
      setMessage(true)
      setTimeout( () => setMessage(false) , 3000);
      console.log(err)})
  }
  return (
    <>
   {message && <Message warning fluid>Wrong Credentials!!</Message>}
   {successMessage && <Message warning fluid>Logged in successfully!!</Message>}
  <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as='h2' color='teal' textAlign='center'>
       Log-in to your account
      </Header>
      <Form className='center'>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" onChange = {changeHandler} />
          <Form.Input icon='lock' iconPosition='left'  placeholder='Password' type='password' name= "password" onChange={changeHandler} />
          <Button type='submit'  color='teal' fluid size='medium' onClick={loginUser}>
            Login
          </Button>
      </Form>
      <Message className="margin">
        New to us? <Link to={`/SignIN/${id}`}><ModalForSignIN/></Link>
      </Message>
    </Grid.Column>
  </Grid>
  </>
    )}

export default LoginForm