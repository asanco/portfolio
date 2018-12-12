import React, { Component } from 'react';
import './App.css';
import Highlight from "./Highlight.js";
import Details from "./Details.js";

class Main extends Component {
  render() {
    return (

      <div className="container">
      <div className="row">

        <div className="col-lg-4 col-sm-4">

          <h3 className="titleText">Details</h3>
          <div className="">
          <Details></Details>
          </div>

        </div>

        <div className="col-lg-8 col-sm-8 highlightContainer">

          <div className="row">
          <div className="col-md-4 col-sm-4">
          <Highlight></Highlight>
          </div>
          <div className="col-md-4 col-sm-4">
          <Highlight></Highlight>
          </div>
          <div className="col-md-4 col-sm-4">
          <Highlight></Highlight>
          </div>
          </div>

        </div>

      </div>
      </div>
    );
  }
}

export default Main;
