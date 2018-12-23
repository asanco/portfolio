import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    return (
  <div>
  <nav className="navbar navbar-default" role="navigation">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand Logo</a>
    </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li className="social pull-right"><a className="fab fa-github" href="https://github.com/asandovaluniandes" target="_blank"></a></li>
          <li className="social pull-right"><a className="fab fa-linkedin-in" href="http://linkedin.com/in/asandoval110" target="_blank"></a></li>
          <li className="social pull-right"><a href="#contact">CV</a></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

    );
  }
}

export default Navbar;
