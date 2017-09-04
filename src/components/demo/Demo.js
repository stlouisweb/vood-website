import React, { Component } from 'react';
import './Demo.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class Demo extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle: false
        }
    }

    toggle(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }
    render() {

        let modal = [];
        modal.push(
            <div className="modal" style={this.state.toggle ? display : hide}>
                <div className="modal-footer">
                    <ButtonToolbar>
                        <Button className="btn btn-primary btn-lg txt" onClick={this.toggle}><p>End Demo</p></Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
        return (
            <div className="Demo">
                <div className="Header">
                    <h2>
                        <span>Try It</span>
                    </h2>
                </div>
                <div>
                    <h2 className="demoText">Click Below for a Live Demonstration of Vood</h2>
                </div>
            <div className="buttons">
                <ButtonToolbar>
                    <Button className="btn btn-primary btn-lg demo txt" onClick={this.toggle}><p>Start Demo</p></Button>
                    {modal}
                </ButtonToolbar>
            </div>
                </div>
        );
    }
}

export default Demo;