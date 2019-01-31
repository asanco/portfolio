import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Contact from './Contact.js';
import About from './About.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     highlightIndex: 1,
   }
 }

 showView(index, e) {
   this.setState({
    highlightIndex: index
   })
 };

  render() {

    const showingPanel = this.state.highlightIndex;
    let viewPanel;

    if (showingPanel === 1) {
      viewPanel = <Main />;
    } else if (showingPanel === 2){
      viewPanel = <About />;
    } else {
      viewPanel = <Contact />;
    }

    return (
      <div className="App">
        {/*https://react-bootstrap.github.io/components/navbar/*/}
        {/*https://blog.prototypr.io/top-10-free-online-portfolio-websites-to-create-perfect-ux-ui-design-portfolios-4406b34f4ce*/}
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" onClick={(e) => this.showView(1, e)}>
                Projects
              </NavItem>
              <NavItem eventKey={2} href="#" onClick={(e) => this.showView(2, e)}>
                About
              </NavItem>
              <NavItem eventKey={3} href="#" onClick={(e) => this.showView(3, e)}>
                Contact
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="https://github.com/asandovaluniandes" target="_blank" rel="noopener noreferrer">
                <a className="fab fa-github" href="https://github.com/asandovaluniandes" target="_blank" rel="noopener noreferrer"><span style={{display: "none"}}>github page link</span></a>
              </NavItem>
              <NavItem eventKey={2} href="http://linkedin.com/in/asandoval110" target="_blank">
                <a className="fab fa-linkedin-in" href="http://linkedin.com/in/asandoval110" target="_blank" rel="noopener noreferrer"><span style={{display: "none"}}>linkedin page link</span></a>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <a href="#contact">CV</a>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {viewPanel}
      </div>
    );
  }
}

export default App;
