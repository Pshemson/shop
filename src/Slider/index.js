import React from 'react';

class Slider extends React.Component {
    constructor() {
        super(...arguments);
        this.allSlides = [];
        this.state = {
            currentSlide: 0,
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.displaySlide = this.displaySlide.bind(this);
    }

    componentDidMount() {
       this.allSlides = [...document.querySelectorAll('.slide')];
       this.displaySlide(this.state.currentSlide)
    }

    nextSlide() {
        const { currentSlide } = this.state;
        if (currentSlide < this.allSlides.length - 1) {
            this.setState({
                currentSlide: currentSlide + 1
            });
        } else {
            this.setState({
                currentSlide: 0
            });
        }

        this.displaySlide(currentSlide)
    }

    displaySlide(slideNumber) {
        this.allSlides.forEach((slide, i) => (i !== slideNumber) ? slide.style.display = "none" : slide.style.display = "block")
    }

    render() {
        return (
            <div className="sliderContainer">
                {/*                <div className="sliderContent">
                 <div className="sliderText">
                 <h2>True <strong>passionate</strong> from our <strong>farmers</strong></h2>
                 <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit
                 lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta
                 urna.</p>
                 <div className="sliderBtn">
                 <span><a href="#">GET IT NOW</a></span>
                 <span><a href="#">LEARN MORE</a></span>
                 </div>
                 </div>
                 <img src="src/images/slider-31.jpg"/>
                 </div>*/}

                <div className="slide">CHUj1</div>
                <div className="slide">CHUj2</div>

                <div className="sliderArrows">
                    <span className="arrows prevSlide" />
                    <span className="arrows nextSlide" onClick={this.nextSlide} />
                </div>
            </div>
        );
    }
}




export default Slider;
