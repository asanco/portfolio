import React, { Component } from 'react';
import './App.css';

class Highlight extends Component {
  render() {
    return (
      <div className="highlight">
      <img src= {this.props.image}  alt={"Project screenshot"} style={{width:"100%", paddingBottom: "5px"}}></img>
      <h6 style={{textAlign: "center", fontWeight:"bold"}}>{this.props.name}</h6>
      <p>{this.props.description}</p>
      <p style={{fontSize: "11px", fontStyle:"italic", color:"#23527c"}}>{this.props.category}</p>
      </div>
    );
  }
}

export default Highlight;
