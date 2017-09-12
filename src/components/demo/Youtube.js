import React, {Component} from 'react';
import './Youtube.css';

class Youtube extends Component {
    render() {
        return (
            <div className="youtube">
                <div className="top">
                    <iframe width="200" height="215" src="https://www.youtube.com/embed/HNOT_feL27Y?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="bottom">
                    <iframe width="200" height="215" src="https://www.youtube.com/embed/HNOT_feL27Y?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        )}}

export default Youtube;