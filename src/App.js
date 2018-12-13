import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Tutorial https://blog.alexdevero.com/learn-react-practice-create-gallery/ */}
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
