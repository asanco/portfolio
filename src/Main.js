import React, { Component } from 'react';
import './App.css';
import Highlight from "./Highlight.js";
import Details from "./Details.js";

class Main extends Component {
  render() {
    return (

      <div className="container">
      <div className="row main">

        <div className="col-lg-5 col-sm-7">
          <div className="">
          <Details />
          </div>

        </div>

        <div className="col-lg-7 col-sm-5 highlightContainer">

          <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <Highlight name="Roll'em" description="A fun dice game made in Unity for mobile devices" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <Highlight name="MineSweeper Team" description="A web based multiplayer Minesweeper game made with Meteor"/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <Highlight name = "Treasure Hunter" description="A web based treasure hunter application made with React"/>
          </div>
          </div>

        </div>

      </div>
      </div>
    );
  }
}

export default Main;
