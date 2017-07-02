import React, {Component} from 'react';
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
                    <h2>Features</h2>
                </div>
                <div className="download">
                    <h2 className="featureText">Download the App</h2>
                    <img src={downloadAppimg} className="featureImg" alt="download" />
                </div>
                <div className="choose">
                    <img src={chooseCategoryimg} className="featureImg" alt="choose" />
                    <h2 className="featureText">Choose Category</h2>
                </div>
                <div className="search">
                    <h2 className="featureText">Search your favorite<br/>movie, live sports, TV talk<br/>shows and other event<br/>anywhere in the world</h2>
                    <img src={searchimg} className="featureImg" alt="search" />
                </div>
                <div className="details">
                    <img src={detailsimg} className="featureImg" alt="details" />
                    <h2 className="featureText">View details and buy<br/>tickets if required </h2>
                </div>
                <div className="headset">
                    <img src={headsetimg} className="headsetImg" alt="headset" />
                    <h2 className="featureText">Watch and enjoy with your<br/>VR headset</h2>
                </div>
            </div>
        );
    }
}

export default Features;