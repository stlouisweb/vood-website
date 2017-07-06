import React, {Component} from 'react';
// import {Image} from 'react-bootstrap';
import ImageResponsive, {Source} from 'react-image-responsive';
import './Features.css';
import detailsimg from './details.png';
import chooseCategoryimg from './chooseCategory.png';
import searchimg from './search.png';
import downloadAppimg from './downloadApp.png';
import headsetimg from './headset.png';

class Features extends Component {
    render() {
        return (
            <div className="Features">
                <div className="Header">
                    <h2><span>Features</span></h2>
                </div>
                <div class="container-fluid">
                    <div className="featureSection row">
                        <div className="col-xs-6 right">
                            <h2 className="featureText">Download the App</h2>
                        </div>
                        <div className="col-xs-6 left">
                            <img src={downloadAppimg} className="featureImg" alt="download" />
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="featureSection row">
                        <div className="col-xs-6 center">
                            <img src={chooseCategoryimg} className="featureImg" alt="choose" />
                        </div>
                        <div className="col-xs-6 center">
                            <h2 className="featureText">Choose a Category</h2>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="featureSection row">
                        <div className="col-xs-6 center">
                            <h2 className="featureText">Search your favorite<br/>movies, live sports, TV talk<br/>shows and other events<br/>anywhere in the world</h2>
                        </div>
                        <div className="col-xs-6 center">
                            <img src={searchimg} className="featureImg" alt="search" />
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="secondSection row">
                        <div className="col-xs-6 center">
                            <img src={detailsimg} className="featureImg" alt="details" />
                        </div>
                        <div className="col-xs-6 center">
                            <img src={headsetimg} className="headsetImg" alt="headset" />
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div className="lastSection row">
                        <div className="col-xs-6 center">
                            <h2 className="lastText">View details and buy<br/>tickets if required </h2>
                        </div>
                        <div className="col-xs-6 center">
                            <h2 className="lastText">Watch and enjoy with your<br/>VR headset</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;