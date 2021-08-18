import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import './App.css';
import { Provider } from 'react-redux'
import Store from './Store'
import LoginForm from './views/login/Login';
import SignIn from './views/signIn/SignIn';
import CartMain from './components/cart/CartMain';
import Menu from './views/menu/Menu';
import Order from './views/order/Order';
import axios from 'axios'

axios.defaults.baseURL='https://food-app-timesinternet.herokuapp.com/'

if (typeof window !== 'undefined') {
   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}
const App = () => (
  <Provider store= {Store}>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
  <Switch>
    <Route exact path="/Login" component={LoginForm} />
  </Switch>
  <Switch>
    <Route exact path="/SignIn" component={SignIn} />
  </Switch>
  <Switch>
    <Route exact path="/Cart" component={CartMain} />
  </Switch>
  <Switch>
    <Route exact path="/Menu" component={Menu} />
  </Switch>
  <Switch>
    <Route exact path="/Order" component={Order} />
  </Switch>
  </Provider>
);

export default App;
