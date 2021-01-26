import * as React from "react";
import { Component } from "react";
import { Router, Link } from "@reach/router";
import { Root, Routes } from 'react-static'

import Home from "./pages/home";
import Contact from "./pages/contact";
import Profile from "./pages/profile";

class App extends Component {
  render() {
    return(
        <Root>
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                     <Link to="/">Home</Link>
                  </div>
                  <div className="col-sm">
                     <Link to="profile">Profile</Link>
                  </div>
                  <div className="col-sm">
                     <Link to="contact">Contact</Link>
                  </div>
              </div>
          </div>

          <Router>
              <Home path="/"/>
              <Contact path="contact" />
              <Profile path="profile" />
              <Routes path="*" />
          </Router>

      </div>
            </Root>
    );
  }
}

export default App;
