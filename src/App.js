import React, { Component } from 'react'
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
        <Contact name="Priscaila" email="p@gmail.com" phone="070" />

        <Contact name="John Doe" email="ngecu16@gmail.com" phone="0707070" />

        </div>
      </div>
    )
  }
}
