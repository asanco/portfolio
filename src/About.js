import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="about fade-in row">
      <div className = "col-md-6" style={{lineHeight: "10px"}}>
        <h3>About me</h3>
        <br/>
        <h5> I'm a last semester Systems and Computing Engineering student (receiving diploma in August) at Universidad de los Andes in Bogotá, Colombia.</h5>
        <h5> Among my interests are visual computing, video game development, front-end web development and robotics.</h5>
        <h5> I'm currently working on my final undergraduate project which consists of creating real time animations with virtual reality equimenent and software.</h5>
        <h5> I enjoy learing new languages (currently learning German) as well as editing videos and learning 3D animation.</h5>
        <br/>
        <br/>
        <h5> If you want to check out my resumé, click <a href="https://drive.google.com/file/d/1BuhL_IcqErZomx9rz55Sl9rMFXIzyxql/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</h5>
      </div>
      <div className = "col-md-6">
        <img src={"https://docs.google.com/uc?id=10VX_padLZUIj8JfyUIKa9JG1z8VmYAPG"} alt="Foto of me" style={{width:"60%", textAlign: "center"}}></img>
      </div>
      </div>
    );
  }
}

export default About;
