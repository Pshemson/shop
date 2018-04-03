import React from 'react';

class Slider extends React.Component {
    render() {

        ////var sliderContainer = document.querySelector('.sliderContainer');
        ////var allSlides = [...sliderContainer.querySelectorAll('.sliderContent')];
        //var nextSlide = document.querySelector('.nextSlide');
        ////var prevSlide = document.querySelector('.prevSlide');
        ////var counter = 0;
//
//
//
        //for (var i = 0; i < nextSlide.length; i++) {
        //    nextSlide[i].addEndEventListener('click', function (event) {
        //        this.style.color = 'red';
        //    });
        //}

//function myFunction(a, b) {
//    const pipa = a + b;
//    return pipa;
//}
//
//const x = myFunction(2, 6);
//alert(x);




        return (
            <div className="sliderContainer">
                <div className="sliderContent">
                    <div className="sliderText">
                        <h2>True <strong>passionate</strong> from our <strong>farmers</strong></h2>
                        <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                        <div className="sliderBtn">
                            <span><a href="#">GET IT NOW</a></span>
                            <span><a href="#">LEARN MORE</a></span>
                        </div>
                    </div>
                    <img src="src/images/slider-31.jpg"/>

                    <div className="sliderArrows">
                        <span className="arrows prevSlide"></span>
                        <span className="arrows nextSlide"></span>
                    </div>
                </div>
            </div>
        );
    }
}




export default Slider;
