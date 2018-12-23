import React, { Component } from 'react';
import './App.css';

class Details extends Component {
  render() {
    return (
      <div className="details fade-in">
      <img src="/image/PersonalFotoBW.jpg" alt="Foto of me" style={{width:"95%"}}></img>
      <h5>Andrés Sandoval</h5>
      <h6>Computer Science and Engineering</h6>
      <p>Welcome to my portfolio. Check out my projects. You can see more details by clicking each of the cards.</p>
      </div>
    );
  }
}

export default Details;
