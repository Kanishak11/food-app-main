import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import './App.css';
import { Provider } from 'react-redux'
import Store from './Store'


const App = () => (
  <Provider store= {Store}>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
  </Provider>
);

export default App;
