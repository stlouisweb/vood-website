import React, {Component} from 'react';
// import {Image} from 'react-bootstrap';
import ImageResponsive, {Source} from 'react-image-responsive';
import './Contact.css';
import Button from 'react-toolbox/lib/button/Button';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Header">
                    <h2><span>Contact Us</span></h2>
                </div>
                <div class="container-fluid">
                    <div className="row gray">
                        <div className="col-xs-4 center">
                            <div className="voodContact">
                                <h4><b>Vood Contact Information</b></h4><br/>
                                <p><b>Email:</b> info@voodvr.co</p><br/>
                                <p><b>Phone:</b> (314) 757 4731</p><br/>
                            </div>
                        </div>
                        <div className="col-xs-4 center">
                            <div className="customerContact">
                                <form>
                                    <input type="text" id="name" name="name" placeholder="Name" />
                                    <input type="text" id="email" name="email" placeholder="Email" />
                                    <input type="text" id="subject" name="subject" placeholder="Subject" />
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-4 center">
                            <div className="messageBox">
                                    <textarea placeholder="Message"></textarea>
                            </div>
                            <Button label="Send"  raised />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;