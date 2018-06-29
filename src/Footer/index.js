import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="newsletterBox container">
                    <li>
                        <h6>
                            <strong>Newsletter</strong> Sign Up
                        </h6>
                        <p>
                            (Get 30% OFF coupon today subscribers)
                        </p>
                    </li>
                    <li>
                        <p>
                            Join <strong>35.000+ subscribers</strong> and get a new discount coupon on every Wednesday.
                        </p>
                    </li>
                    <li>
                        <input placeholder="Your email address..."/>
                        <span>SUBSCRIBE</span>
                    </li>
                </div>
            </div>

        );
    }
}

export default Footer;