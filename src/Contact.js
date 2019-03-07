import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact fade-in">
      <h4> <i className="fab fa-linkedin-in"> </i><a href = "http://linkedin.com/in/asandoval110"> http://linkedin.com/in/asandoval110 </a></h4>
      <h4> <i className="fab fa-github"></i><a href = "https://github.com/asandovaluniandes"> https://github.com/asandovaluniandes </a></h4>
      <h4> <i class="fas fa-envelope"></i><a href = "mailto: a.sandoval1303@uniandes.edu.co"> a.sandoval1303@uniandes.edu.co </a></h4>

      </div>
    );
  }
}

export default Contact;
