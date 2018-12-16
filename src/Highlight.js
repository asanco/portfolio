import React, { Component } from 'react';
import './App.css';

class Highlight extends Component {
  render() {
    return (
      <div className="highlight">
      <img src={this.props.image} alt={this.props.alt} style={{width:"100%"}}></img>
      <h5>{this.props.name}</h5>
      <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Highlight;
