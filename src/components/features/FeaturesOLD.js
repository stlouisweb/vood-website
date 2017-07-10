// @flow

import React, {Component} from 'react';
import './Features.css';
import detailsimg from '../../assets/details.png';
import chooseCategoryimg from '../../assets/chooseCategory.png';
import searchimg from '../../assets/search.png';
import downloadAppimg from '../../assets/downloadApp.png';
import headsetimg from '../../assets/headset.png';

class FeaturesOld extends Component {
  render() {
    return (
      <div className="Features">
        <div className="Header">
          <h2>
            <span>Features</span>
          </h2>
        </div>
        <div className="container-fluid">
          <div className="featureSection row">
            <div className="col-xs-6 right">
              <h2 className="featureText">Download the App</h2>
            </div>
            <div className="col-xs-6 left">
              <img src={downloadAppimg} className="featureImg" alt="download" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="featureSection row">
            <div className="col-xs-6 center">
              <img
                src={chooseCategoryimg}
                className="featureImg"
                alt="choose"
              />
            </div>
            <div className="col-xs-6 center">
              <h2 className="featureText">Choose a Category</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="featureSection row">
            <div className="col-xs-6 center">
              <h2 className="featureText">
                Search your favorite<br />movies, live sports, TV talk
                <br />
                shows and other events<br />anywhere in the world
              </h2>
            </div>
            <div className="col-xs-6 center">
              <img src={searchimg} className="featureImg" alt="search" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="secondSection row">
            <div className="col-xs-6 center">
              <img src={detailsimg} className="featureImg" alt="details" />
            </div>
            <div className="col-xs-6 center">
              <img src={headsetimg} className="headsetImg" alt="headset" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="lastSection row">
            <div className="col-xs-6 center">
              <h2 className="lastText">
                View details and buy<br />tickets if required{' '}
              </h2>
            </div>
            <div className="col-xs-6 center">
              <h2 className="lastText">
                Watch and enjoy with your<br />VR headset
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesOld;
