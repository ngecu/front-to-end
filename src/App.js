import React, { Component } from 'react'
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

import {Provider} from './Context'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    
    return (
      <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
        <Contacts />
        </div>
      </div>
      </Provider>
    )
  }
}
