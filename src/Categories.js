import React, {Component} from 'react';
import './Categories.css';
import transimg from './transformers.jpg';
import bballimg from './basketball.jpg';
import bieberimg from './bieber.jpg';
import ellenimg from './ellen.jpg';
import oscarsimg from './oscars.jpg';

class Categories extends Component {
    render() {
        return (
            <div className="Categories">
                <div className="Header">
                    <h2>Categories</h2>
                </div>

                <div className="container">
                    <img src={transimg} className="transformersImg" alt="transformers" />
                    <p className="text">Movies</p>
                </div>

                <div className="basketball">
                    <img src={bballimg} className="bballImg" alt="basketball" />
                    <div>
                        <img src={bieberimg} className="bieberImg" alt="bieber" />
                            <div>
                                <div>
                                    <img src={ellenimg} className="ellenImg" alt="ellen" />
                                </div>
                                <div>
                                    <img src={oscarsimg} className="oscarsImg" alt="oscars" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;