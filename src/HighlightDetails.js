import React, { Component } from 'react';
import './App.css';

class HighlightDetails extends Component {
  render() {
    return (
      <div className="highlightDetails fade-in">

      <h4 style={{textAlign: "center", fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px"}}>
        <i className="fas fa-arrow-left" style={{position: "absolute", left:"15px", paddingLeft:"20px"}} onClick={this.props.buttonClick}></i>
        {this.props.name}
      </h4>

      <p style={{textAlign: "justify", fontSize: "16px", paddingRight:"20px", paddingLeft:"20px"}}>{this.props.longDescription}</p>
      <p style={{fontSize: "12px", paddingLeft:"20px"}}>Category: {this.props.category}</p>
      <p style={{fontSize: "14px", paddingRight:"20px", paddingLeft:"20px"}}><a href={this.props.url} target="_blank" rel="noopener noreferrer">Click here to go to the project page</a></p>

      <img src={this.props.secondImg} alt={"Project screenshot"} style={{width:"100%", paddingTop:"5px", margin:"auto", display:"block"}}></img>

      </div>
    );
  }
}

export default HighlightDetails;
