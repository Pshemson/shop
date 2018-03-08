import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Slider from '../Slider';
import Features from '../Features';
import Products from '../Products';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {

        render() {
            return (
                <div>
                    <Header />
                    <Slider />
                    <Features />
                    <Products />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});