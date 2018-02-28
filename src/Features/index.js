import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <div>
                <ul className="container featureBoxes">
                    <li>
                        <span><img src="src/images/glass1.png"/></span>
                        <div>
                        <h3>
                            We drive fast & ship faster
                        </h3>
                        <p>
                            Aliquam quis ipsum id eros ultricies more
                        </p>
                        </div>
                    </li>
                    <li>
                        <div></div>
                        <h3>
                            We save your more money
                        </h3>
                        <p>
                            Aliquam quis ipsum id eros ultricies more
                        </p>
                    </li>
                    <li>
                        <div></div>
                        <h3>
                            Daily discount coupons
                        </h3>
                        <p>
                            Aliquam quis ipsum id eros ultricies more
                        </p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Features;