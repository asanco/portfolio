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
  ["https://source.unsplash.com/3Z70SDuYs5g/800x600", "Roll'em", "Dice game for mobile devices made using Unity", "Roll'em is a singleplayer dice game made with Unity. Rotate the die or dice to reach the target score before the time runs out. Still in alpha stage.", "Games", "https://google.com"],
  ["https://source.unsplash.com/01vFmYAOqQ0/800x600", "Minesweeper Team", "A multiplayer version of Minesweeper mande with Meteor", "Minesweeper Team is a web based multiplayer Minesweeper game made with the Meteor framework. Scores and finished games are stored in a database as well as a leaderboard with the best scores.", "Web Applications/Games", "https://github.com/jdguzmans/minesweeper-team", "/image/MinesweeperTeamFoto2.png"],
  ["https://source.unsplash.com/2Bjq3A7rGn4/800x600", "Treasure Hunter", "A scavenger hunt application that uses Google Map's API", "Treasure Hunter is a web based treasure hunter game made with React. It makes use of Google Maps' API to find specific locations that are hinted at while looking for the treasure. You can also make your own Hunt in the creation menu.", "Web Applications/Games", "https://github.com/asandovaluniandes/treasure-hunter","/image/TreasureHunterFoto2.png"],
  ["https://source.unsplash.com/t20pc32VbrU/800x600", "Human Robot Interaction", "Application that lets a user control a robot with a Kinect", "This university project showcases the Kinect's ability to recognize customized gestures to move a P3-DX robot in a simulation environment and in real space.", "Robotics", "https://github.com","/image/RobotHRIFoto2.png"],
  ["https://source.unsplash.com/pHANr-CpbYM/800x600", "Robot Path Planning", "Path planning application that uses an A* algorithm", "Robotics project that implements two things: path planning using an A* algorithm to optimize it´s route to it's goal and localization using the robot's laser to correct it's internal position.", "Robotics", "https://github.com"],
  ["https://source.unsplash.com/3PmwYw2uErY/800x600", 'Personal website', 'Basic HTML page',"My first web development project. It is a personal website that I made while learning HTML and CSS. It is made only with those two tecnologies.", "Web Dev", "https://github.com/asandovaluniandes/asandovaluniandes.github.io","/image/PersonalWebsiteFoto2.png"]
   ]
  }
}
  // Function for showing more details of each project
  showHighlight(index, e) {
    this.setState({
     highlightIndex: index
    })
  };

// Function for going back from highlightDetails to detailsPanel
  showDetails() {
    this.setState({
     highlightIndex: -1
    })
  };

  render() {

    const showingHighlight = this.state.highlightIndex;
    let detailsPanel;

    if (showingHighlight === -1) {
      detailsPanel = <Details />;
;
    } else {
      detailsPanel = <HighlightDetails buttonClick={this.showDetails.bind(this)} image={this.state.imgUrls[showingHighlight][0]} name={this.state.imgUrls[showingHighlight][1]} longDescription={this.state.imgUrls[showingHighlight][3]} category={this.state.imgUrls[showingHighlight][4]} url={this.state.imgUrls[showingHighlight][5]} secondImg={this.state.imgUrls[showingHighlight][6]} thirdImg={this.state.imgUrls[showingHighlight][7]}/>
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
           <Highlight image={projects[0]} name={projects[1]} description={projects[2]} category={projects[4]}/>
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
