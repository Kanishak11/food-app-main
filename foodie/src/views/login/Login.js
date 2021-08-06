import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message} from 'semantic-ui-react'
import axios from 'axios'
import ModalForSignIN from '../../components/signin/SignIn'


const LoginForm = () =>  {
    const [userDetails ,setUserDetails] = useState({}) 
    const changeHandler = (e) => {
        setUserDetails({...userDetails , [e.target.name] : e.target.value})
        console.log(userDetails)
    }
    const loginUser = () => {
        const promise = axios.post("http://localhost:4200/users",userDetails)
        promise.then((res) => {
            const token = res.data.token
            console.log(token)
    }).catch((err) => {console.log(err)})
    }
    return (
  <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form className='centers'>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" onChange = {changeHandler} />
          <Form.Input icon='lock' iconPosition='left'  placeholder='Password' type='password' name= "password" onChange={changeHandler} />
          <Button color='teal' fluid size='medium' onClick={loginUser}>
            Login
          </Button>
      </Form>
      <Message className="margin">
        New to us? <Link to='/SignIN'><ModalForSignIN/></Link>
      </Message>
    </Grid.Column>
  </Grid>
    )}

export default LoginForm