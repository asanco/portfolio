import React, { Component } from 'react';
import './App.css';
import Highlight from "./Highlight.js";
import Details from "./Details.js";

class Main extends Component {

constructor(props) {
  super(props);

  this.state = {
   showingHighlight: false,
   url: '',
   imgUrls : [
  'https://source.unsplash.com/3Z70SDuYs5g/800x600',
  'https://source.unsplash.com/01vFmYAOqQ0/800x600',
  'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
  'https://source.unsplash.com/t20pc32VbrU/800x600',
  'https://source.unsplash.com/pHANr-CpbYM/800x600',
  'https://source.unsplash.com/3PmwYw2uErY/800x600'
   ]
  }
}

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

        <div className='row'>
        {
        this.state.imgUrls.map((url, index) => {
         return <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='gallery-card'>
           <Highlight image={url} name={index} description={"Description " + index} />

           <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
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
