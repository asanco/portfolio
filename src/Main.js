import React, { Component } from 'react';
import './App.css';
import Highlight from "./Highlight.js";
import HighlightDetails from "./HighlightDetails.js";
import Details from "./Details.js";

class Main extends Component {

constructor(props) {
  super(props);

  this.state = {
   highlightIndex: -1,
   url: '',
   imgUrls : [
  ['https://source.unsplash.com/3Z70SDuYs5g/800x600', "Roll'em", "Dice game for mobile devices made using Unity"],
  ['https://source.unsplash.com/01vFmYAOqQ0/800x600', "Minesweeper Team", "A multiplayer version of Minesweeper mande with Meteor"],
  ['https://source.unsplash.com/2Bjq3A7rGn4/800x600', "Treasure Hunter", "A scavenger hunt application that uses Google Map's API"],
  ['https://source.unsplash.com/t20pc32VbrU/800x600', "Human Robot Interaction", "Application that lets a user control a robot with a Kinect"],
  ['https://source.unsplash.com/pHANr-CpbYM/800x600', "Robot Path Planning", "Path planning application that uses an A* algorithm"],
  ['https://source.unsplash.com/3PmwYw2uErY/800x600', "Personal website", "Basic HTML page"],
  ['https://source.unsplash.com/uOi3lg8fGl4/800x600'],
  ['https://source.unsplash.com/CwkiN6_qpDI/800x600'],
  ['https://source.unsplash.com/9O1oQ9SzQZQ/800x600']
   ]
  }
}
  // Function for showing more details of each project
  showHighlight(index, e) {
    this.setState({
     highlightIndex: index
    })
  };

  render() {

    const showingHighlight = this.state.highlightIndex;
    let detailsPanel;

    if (showingHighlight === -1) {
      detailsPanel = <Details />;
;
    } else {
      detailsPanel = <HighlightDetails image={this.state.imgUrls[showingHighlight][0]} name={this.state.imgUrls[showingHighlight][1]} description={this.state.imgUrls[showingHighlight][2]} />
    }

    return (

      <div className="container">
      <div className="row main">

        <div className="col-lg-5 col-sm-7">
          <div className="">
          {detailsPanel}
          </div>

        </div>

        <div className="col-lg-7 col-sm-5 highlightContainer">

        <div className='row'>
        {
        this.state.imgUrls.map((projects, index) => {
         return <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='gallery-card' onClick={(e) => this.showHighlight(index, e)}>
           <Highlight image={projects[0]} name={projects[1]} description={projects[2]} />
          </div>
        </div>
        })
        }
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Main;
