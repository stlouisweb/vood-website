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
          <h2>Virtually Teleport Anywhere</h2>
        </div>

        <p className="App-intro">
            Your dreams come true. Now you can watch movies, go to concerts or games virtually<br/>being at home. Never miss a thing. Be part of the craziness and fun.
        </p>
          <Button label="Enter the Fun" raised primary />
      </div>
    );
  }
}

export default App;
