import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact fade-in">
      <h4> You can contact me via these links:</h4>
      <br/>
      <div className="row" style={{textAlign: "center"}}>
        <div className = "col-md-6">
          <h3><a href = "https://github.com/asandovaluniandes"><i className="fab fa-github"></i></a></h3>
          <h5><a href = "https://github.com/asandovaluniandes">asandovaluniandes </a></h5>
        </div>
        <div className = "col-md-6">
          <h3><a href = "mailto: a.sandoval1303@uniandes.edu.co"><i class="fas fa-envelope"></i></a></h3>
          <h5><a href = "mailto: a.sandoval1303@uniandes.edu.co">a.sandoval1303@uniandes.edu.co </a></h5>
        </div>
      </div>
      </div>
    );
  }
}

export default Contact;
