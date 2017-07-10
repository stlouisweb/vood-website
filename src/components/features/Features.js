// @flow

import React, {Component} from 'react';
import './Features.css';
import detailsimg from '../../assets/details.png';
import chooseCategoryimg from '../../assets/chooseCategory.png';
import searchimg from '../../assets/search.png';
import downloadAppimg from '../../assets/downloadApp.png';
import headsetimg from '../../assets/headset.png';

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <div className="Header">
          <h2>
            <span>Features</span>
          </h2>
        </div>
        <div className="features-grid">
          <div className="fet1">
            <h2 className="featureText">Download the App</h2>
          </div>
          <div className="fet2">
            <img src={downloadAppimg} className="featureImg" alt="download" />
          </div>
          <div className="fet3">
            <img src={chooseCategoryimg} className="featureImg" alt="choose" />
          </div>
          <div className="fet4">
            <h2 className="featureText">Choose a Category</h2>
          </div>
          <div className="fet5">
            <h2 className="featureText">
              Search your favorite<br />movies, live sports, TV talk
              <br />
              shows and other events<br />anywhere in the world
            </h2>
          </div>
          <div className="fet6">
            <img src={searchimg} className="featureImg" alt="search" />
          </div>
          <div className="fet7">
            <img src={detailsimg} className="featureImg" alt="details" />
          </div>
          <div className="fet8">
            <img src={headsetimg} className="headsetImg" alt="headset" />
          </div>
          <div className="fet9">
            <h2 className="lastText">
              View details and buy<br />tickets if required{' '}
            </h2>
          </div>
          <div className="fet10">
            <h2 className="lastText">
              Watch and enjoy with your<br />VR headset
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
