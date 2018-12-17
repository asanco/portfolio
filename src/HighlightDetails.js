import React, { Component } from 'react';
import './App.css';

class HighlightDetails extends Component {
  render() {
    return (
      <div className="highlight fade-in">
      <img src={this.props.image} alt={this.props.alt} style={{width:"100%"}}></img>
      <h5>{this.props.name}</h5>
      <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HighlightDetails;
