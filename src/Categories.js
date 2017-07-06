import React, {Component} from 'react';
// import {Image} from 'react-bootstrap';
import ImageResponsive, {Source} from 'react-image-responsive';
import './Categories.css';
import transimg from './transformers.jpg';
import bballimg from './basketball.jpg';
import bieberimg from './bieber.jpg';
import ellenimg from './ellen.jpg';
import oscarsimg from './oscars.jpg';
import vrheadset from './vrheadset.png';

class Categories extends Component {
    render() {
        return (
            <div className="Categories">
                <div className="Header">
                    <h2><span>Categories</span></h2>
                </div>
                <div className="centerImages">
                    <div class="container-fluid">
                        <div className="container row tranSize">
                            <div className="col-xs-12 colPadding twelve">
                                <img src={transimg} className="transformersImg" alt="transformers" />
                                <h2>Movies</h2>
                                <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div className="row imgWidth">
                            <div className="col-xs-4 center bballctr colPadding">
                                <h2>Sporting Events</h2>
                                <p>Be transported to sporting venues and be part of all the courtside action</p>
                                <img src={bballimg} className="bballImg" alt="basketball" />
                                <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
                            </div>
                            <div className="col-xs-8 center bieberctr colPadding">
                                <div className="bieberCenter">
                                    <h2>Live Concerts</h2>
                                    <p>Enjoy your favorite artists from the front row</p>
                                    <img src={bieberimg} className="bieberImg" alt="bieber" />
                                    <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
                                </div>
                                    <div class="container-fluid">
                                        <div className="row showWidth">
                                            <div className="col-xs-6 center ellenctr colPadding six">
                                                <h2>Talk Shows</h2>
                                                <p>Attend your favorite talk shows without without the frustration of limited seats</p>
                                                <img src={ellenimg} className="ellenImg" alt="ellen" />
                                                <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
                                            </div>
                                            <div className="col-xs-6 center oscarctr colPadding six">
                                                <h2>Events</h2>
                                                <p>Be part of all the fun and entertainment of glamorous events. See your favorite celebrities close up.</p>
                                                <img src={oscarsimg} className="oscarsImg" alt="oscars" />
                                                <img src={vrheadset} className="vrheadsetImg" alt="vrheadset" />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;