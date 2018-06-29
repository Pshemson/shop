import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
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
                <ul className="footerInfo container">
                    <li>
                        <h7>
                            GET THE APP
                        </h7>
                        <p>GreenMart App is now available on Google Play & App Store. Get it now.</p>
                    </li>

                    <li>
                        <h7>
                            INFORMATION
                        </h7>
                        <p>
                            <a href="#">Home</a>
                        </p>
                    </li>

                    <li>
                        <h7>
                            USER AREA
                        </h7>
                        <p></p>
                    </li>

                    <li>
                        <h7>
                            GUIDE & HELP
                        </h7>
                        <p></p>
                    </li>

                    <li>
                        <h7>
                            CONTACT INFO
                        </h7>
                        <p></p>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Footer;