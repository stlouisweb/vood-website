// @flow

import React, {Component} from 'react';
import vrheadset from '../../assets/vrheadset.png';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="Categories">
        <div className="Header">
          <h2>
            <span>Categories</span>
          </h2>
        </div>
        <div className="centerImages">
          <div className="trans">
            <h2>Movies</h2>
            <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
          </div>
          <div className="bball">
            <h2>Sporting Events</h2>
            <p>
              Be transported to sporting venues and be part of all the courtside
              action
            </p>
            <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
          </div>
          <div className="bieber">
            <h2>Live Concerts</h2>
            <p>Enjoy your favorite artists from the front row</p>
            <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
          </div>
          <div className="ellen">
            <h2>Talk Shows</h2>
            <p>
              Attend your favorite talk shows without without the frustration of
              limited seats
            </p>
            <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
          </div>
          <div className="oscar">
            <h2>Events</h2>
            <p>
              Be part of all the fun and entertainment of glamorous events. See
              your favorite celebrities close up.
            </p>
            <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
