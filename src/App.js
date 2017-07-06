import React, {Component} from 'react';
import ImageResponsive, {Source} from 'react-image-responsive';
// import {Image} from 'react-bootstrap';
import logo from './logo.png';
import Button from 'react-toolbox/lib/button/Button';
import bgVideo from './assets/vodebg.mp4';
import bgImage from './assets/vood.png';
import './App.css';
import './Categories.js';
import Categories from "./Categories";
import Features from "./Features";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Intro">
        <div className="fullscreen-bg">
          <video loop muted autoPlay poster={bgImage}
            className="fullscreen-bg-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>VOOD</p>
          <h2>Virtually Teleport Anywhere</h2>
        </div>

        <p className="App-intro">
            Let your fantasies become reality. Now you can watch movies, attend live concerts or games virtually<br/>while in the comfort of your home. Never miss a moment of all the craziness and fun.
        </p>
          <Button label="Enter the Fun" raised primary />
        </div>
          <Categories />
          <Features />
          <Contact />
      </div>
    );
  }
}

export default App;
