import React, { Component } from 'react';
import './App.css';

class Highlight extends Component {
  render() {
    return (
      <div className="highlight">
      <img src= {this.props.image}  alt={this.props.alt} style={{width:"100%", paddingBottom: "5px"}}></img>
      <h6 style={{textAlign: "center"}}>{this.props.name}</h6>
      <p>{this.props.description}</p>
      <p style={{fontSize: "11px", fontStyle:"italic"}}>{this.props.category}</p>
      </div>
    );
  }
}

export default Highlight;
