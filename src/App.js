import React, {Component} from 'react';
import logo from './logo.svg';
import Button from 'react-toolbox/lib/button/Button';
import bgVideo from './assets/vodebg.mp4';
import bgImage from './assets/vood.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullscreen-bg">
          <video loop muted autoPlay poster={bgImage}
            className="fullscreen-bg-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button label="Hello World!" raised primary />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
