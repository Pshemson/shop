import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Features;