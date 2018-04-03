import React from 'react';

class Slider extends React.Component {
    render() {

        var sliderContainer = document.querySelector('.sliderContainer');
        var allSlides = document.querySelectorAll('.sliderContent');
        var nextSlide = document.querySelector('.nextSlide');
        var prevSlide = document.querySelector('.prevSlide');
        var counter = 0;
        //var sliderContainer = document.querySelector('.sliderContainer');

function clickFun () {
            console.log('Klika!')
    sliderContainer.style.width = '20%';
        }





        //nextSlide.addEventListener('click', function(event){
        //    if (counter <= allSlides.length - 2) {
        //        allSlides[counter].style.marginLeft = "-100%";
        //        counter++;
        //        if (counter < allSlides.length -1) {
        //            prevSlide.style.color = "#24ba9f";
        //        } else {
        //            this.style.color = "#c6c6c6";
        //        }
        //    }
//
        //});


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
                </div>
                <div className="sliderContent">
                    <div className="sliderText">
                        <h2>True <strong>passionate</strong> from our <strong>farmers</strong></h2>
                        <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                        <div className="sliderBtn">
                            <span><a href="#">GET IT NOW</a></span>
                            <span><a href="#">DRUGI SLAJD</a></span>
                        </div>
                    </div>
                    <img src="src/images/slider-31.jpg"/>
                </div>
                <div className="sliderArrows">
                    <span className="arrows prevSlide"></span>
                    <span className="arrows nextSlide" onClick={clickFun}></span>
                </div>
            </div>
        );
    }
}




export default Slider;
