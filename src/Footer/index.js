import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="newsletterContainer">
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
                <ul className="footerInfo">
                    <li>
                        <h7>
                            GET THE APP
                        </h7>
                        <p>GreenMart App is now available on Google Play & App Store.</p>
                        <p>Get it now.</p>
                    </li>

                    <li>
                        <h7>
                            INFORMATION
                        </h7>
                        <a href="#">About us</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Privacy & Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Manufactures</a>
                    </li>

                    <li>
                        <h7>
                            USER AREA
                        </h7>
                        <a href="#">My Account</a>
                        <a href="#">My Cart</a>
                        <a href="#">Login</a>
                        <a href="#">Wishlist</a>
                        <a href="#">Checkout</a>
                    </li>

                    <li>
                        <h7>
                            GUIDE & HELP
                        </h7>
                        <a href="#">Getting Started</a>
                        <a href="#">FAQs</a>
                        <a href="#">Buying Guide</a>
                        <a href="#">Order Returns</a>
                        <a href="#">Affiliate Program</a>
                    </li>

                    <li>
                        <h7>
                            CONTACT INFO
                        </h7>
                        <img src="src/images/support.png" />
                        <span className="contactNumber">+01-202-555-0181</span>
                        <p>71 Pilgrim Avenue Chevy Chase, MD 20815</p>
                        <a className="contactMail" href="#">contact@example.com</a>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Footer;