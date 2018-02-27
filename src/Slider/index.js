import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div className="sliderContainer">
                <div className="sliderText">
                    <h2>True <strong>passionate</strong> from our <strong>farmers</strong></h2>
                    <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                </div>
                <img src="src/images/slider-31.jpg"/>
                <div className="sliderBtn">
                    <span><a href="#">GET IT NOW</a></span>
                    <span><a href="#">LEARN MORE</a></span>
                </div>
                <div className="sliderArrows">
                    <span className="arrows prevSlide"></span>
                    <span className="arrows nextSlide"></span>
                </div>
                <ul className="container featureBoxes">
                    <li>
                        <div>PUPA</div>
                        <h3>
                            We drive fast & ship faster
                        </h3>
                        <p>
                            Aliquam quis ipsum id eros ultricies more
                        </p>
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

export default Slider;
