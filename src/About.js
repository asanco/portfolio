import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="about fade-in row">
      <div className = "col-md-6">
        <h5> I'm a last semester Systems and Computing Engineering student at Universidad de los Andes in Bogotá, Colombia.</h5>
        <h5> Among my interests are visual computing, video game development, front-end web development and robotics.</h5>
        <h5> I'm currently working on my final undergraduate project which consists of creating real time animations with virtual reality equimenent and software.</h5>
        <h5> I enjoy learing new languages (currently learning German) as well as editing videos and learning 3D animation.</h5>
        <br/>
        <br/>
        <h5> If you want to check out my full CV, click here.</h5>
      </div>
      <div className = "col-md-6">
        <img src={"https://docs.google.com/uc?id=1BlJNiJwihj5vsjoQ4SQoDOkPrvEdWdtt"} alt="Foto of me" style={{width:"100%"}}></img>
      </div>
      </div>
    );
  }
}

export default About;
