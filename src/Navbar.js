import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    return (
    <div className="topnav">
    <div className="topnav-centered">
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="topnav-right">
      <a className="fab fa-github" href="https://github.com/asandovaluniandes"></a>
      <a className="fab fa-linkedin-in" href="http://linkedin.com/in/asandoval110"></a>
      <a href="#contact">CV</a>
    </div>
    </div>
    );
  }
}

export default Navbar;
