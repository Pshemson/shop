import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Slider from '../Slider';
import Features from '../Features';
import Products from '../Products';
import Footer from '../Footer';
document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {

        render() {
            return (
                <div>
                    <Header />
                    <Slider />
                    <Features />
                    <Products />
                    <Footer />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});