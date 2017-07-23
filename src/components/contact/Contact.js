// @flow

import Button from 'react-toolbox/lib/button/Button';
import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="Header">
          <h2>
            <span>Contact Us</span>
          </h2>
        </div>
        <div className="contact-body">
          <div className="voodContact">
            <h4>
              <b>Vood Contact Information</b>
            </h4>
            <p>
              <b>Email:</b> info@voodvr.co
            </p>
            <p>
              <b>Phone:</b> (314) 757 4731
            </p>
          </div>
          {/*<div className="customerContact">*/}
            {/*<form>*/}
              {/*<input type="text" id="name" name="name" placeholder="Name" />*/}
              {/*<input type="text" id="email" name="email" placeholder="Email" />*/}
              {/*<input*/}
                {/*type="text"*/}
                {/*id="subject"*/}
                {/*name="subject"*/}
                {/*placeholder="Subject"*/}
              {/*/>*/}
            {/*</form>*/}
          {/*</div>*/}
          {/*<div className="messageBox">*/}
            {/*<textarea placeholder="Message" />*/}
            {/*<Button label="Send" className="contact-submit" raised />*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Contact;
