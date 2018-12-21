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
      <p style={{fontSize: "14px", paddingRight:"20px", paddingLeft:"20px"}}><a href={this.props.url}>Click here to go to the project page</a></p>

      <img src={this.props.image} alt={this.props.alt} style={{width:"50%", paddingTop:"10px", margin:"auto", display:"block"}}></img>

      <div className="row" style={{paddingTop: "5px"}}>
      <div className="col-lg-6">
      <img src={this.props.secondImg} alt={this.props.alt} style={{width:"80%", margin:"auto", display:"block"}}></img>
      </div>

      <div className="col-lg-6">
      <img src={this.props.thirdImg} alt={this.props.alt} style={{width:"80%", margin:"auto", display:"block"}}></img>
      </div>

      </div>

      </div>
    );
  }
}

export default HighlightDetails;
