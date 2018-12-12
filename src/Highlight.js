import React, { Component } from 'react';
import './App.css';

class Highlight extends Component {
  render() {
    return (
      <div className="highlight">
      <img src="/image/background1.jpg" style={{width:"100%"}}></img>
      <h5>Project 1</h5>
      <p>Project description</p>
      </div>
    );
  }
}

export default Highlight;
