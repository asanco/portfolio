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
   imgUrls : []
  }
  this.loadData("https://spreadsheets.google.com/feeds/list/12xVYa20sk-g9SETTDj2RixDDy5R7uEsUSONBYSoN6VY/od6/public/values?alt=json");
}

 loadData(url) {
  var xhttp = new XMLHttpRequest();
  var projects = [];
  var portfolioJson = null;
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      portfolioJson = JSON.parse(xhttp.responseText);
      var jsonProjects = portfolioJson.feed.entry;
      //console.log(jsonProjects);

      for (var i=0; i<jsonProjects.length; i++){
        var projectRow = [];
        projectRow.push(jsonProjects[i].gsx$firstimg.$t);
        projectRow.push(jsonProjects[i].gsx$title.$t);
        projectRow.push(jsonProjects[i].gsx$shortdesc.$t);
        projectRow.push(jsonProjects[i].gsx$longdesc.$t);
        projectRow.push(jsonProjects[i].gsx$category.$t);
        projectRow.push(jsonProjects[i].gsx$link.$t);
        projectRow.push(jsonProjects[i].gsx$secondimg.$t);
        projects.push(projectRow);
      }

      //console.log(projects);
      this.setState({
       imgUrls: projects
      })
    }
  }.bind(this);
  xhttp.open("GET", url, true);
  xhttp.send();
}

  // Function for showing more details of each project
  showHighlight(index, e) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
    } else {
      detailsPanel = <HighlightDetails buttonClick={this.showDetails.bind(this)} image={this.state.imgUrls[showingHighlight][0]} name={this.state.imgUrls[showingHighlight][1]} longDescription={this.state.imgUrls[showingHighlight][3]} category={this.state.imgUrls[showingHighlight][4]} url={this.state.imgUrls[showingHighlight][5]} secondImg={this.state.imgUrls[showingHighlight][6]}/>
    }

    return (

      <div className="container">
      <div className="row main">

        <div className="col-lg-5 col-sm-7">
          <div className="">
          {detailsPanel}
          </div>

        </div>

        <div className="col-lg-7 col-sm-5 highlightContainer fade-in">

        <div className='row'>
        {
        this.state.imgUrls.map((projects, index) => {
         return <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
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
