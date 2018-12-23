import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*https://react-bootstrap.github.io/components/navbar/*/}
        {/*https://blog.prototypr.io/top-10-free-online-portfolio-websites-to-create-perfect-ux-ui-design-portfolios-4406b34f4ce*/}
        <Navbar inverse collapseOnSelect>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Projects
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavItem eventKey={3} href="#">
                Contact
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="https://github.com/asandovaluniandes" target="_blank">
                <a className="fab fa-github" ></a>
              </NavItem>
              <NavItem eventKey={2} href="http://linkedin.com/in/asandoval110" target="_blank">
                <a className="fab fa-linkedin-in" ></a>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <a href="#contact">CV</a>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Main/>
      </div>
    );
  }
}

export default App;
