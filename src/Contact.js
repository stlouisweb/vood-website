import React, {Component} from 'react';
import './Contact.css';
import Button from 'react-toolbox/lib/button/Button';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="Header">
                    <h2>Contact</h2>
                </div>
                <div className="voodContact">
                    <p>500 Terry Francois Street<br/>
                        San Francisco, CA  94158<br/><br/><br/>
                        info@mysite.com<br/>
                        Tel: 123-456-7890<br/>
                        Fax: 123-456-7890
                    </p>
                </div>
                <div className="customerContact">
                    <p>Please Provide a Valid Email</p>
                </div>
                <div className="messageBox">
                </div>
                <Button label="Send" raised primary />
            </div>
        );
    }
}

export default Contact;