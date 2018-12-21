import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Navbar from './Navbar.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*https://blog.prototypr.io/top-10-free-online-portfolio-websites-to-create-perfect-ux-ui-design-portfolios-4406b34f4ce*/}
        <Navbar />
        <Main/>
      </div>
    );
  }
}

export default App;
