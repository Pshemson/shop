import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <section>
                <ul className="container featureBoxes">
                    <li>
                        <span><img src="src/images/delivery-truck.png"/></span>
                        <div className="boxText">
                            <h3>
                                We drive fast & ship faster
                            </h3>
                            <p>
                                Aliquam quis ipsum id eros ultricies more
                            </p>
                        </div>
                    </li>
                    <li>
                        <span><img src="src/images/rich.png"/></span>
                        <div className="boxText">
                            <h3>
                                We save your more money
                            </h3>
                            <p>
                                Aliquam quis ipsum id eros ultricies more
                            </p>
                        </div>
                    </li>
                    <li>
                        <span><img src="src/images/discount.png"/></span>
                        <div className="boxText">
                            <h3>
                                Daily discount coupons
                            </h3>
                            <p>
                                Aliquam quis ipsum id eros ultricies more
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="container welcomeContainer">
                    <h4>
                        Welcome to <strong>Green Mart</strong> organic store
                    </h4>
                    <span><img src="src/images/farmer.png"/></span>
                    <p>
                        Donec vulputate sit amet ex vel imperdiet. Sed iaculis urna commodo molestie aliquet. Etiam non lectus orci. In gravida libero non nibh dignissim, consequat porttitor lacus elementum. Nam sceleri sque, felis ut condimentum hendrerit, ex tellus luctus nis.
                    </p>
                    <div className="signatureContainer">
                    <span>
                        Kerry Smith.
                    </span>
                    <span>
                        GreenMart’s Founder/CEO
                    </span>
                    </div>
                    <div className="container underDescription">
                        <img src="src/images/herbalism.png"/>
                    </div>
                </div>

            </section>
        );
    }
}

export default Features;