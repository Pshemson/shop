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
                    <li>GET IT NOW</li>
                    <li>LEARN MORE</li>
                </div>
                <span className="prevSlide"></span>
                <span className="nextSlide"></span>
            </div>
        );
    }
}

export default Slider;
