import React, { Component } from 'react'
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Test from './components/test/Test'

import {Provider} from './Context'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    
    return (
      <Provider>
        <Router>
      <div className="App">
        <Header branding="Contact Manager" />

        <div className="container">
          <Switch>
            
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/contact/add" component={AddContact}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Test" component={Test}/>
            
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      </Router>
      </Provider>
    )
  }
}
