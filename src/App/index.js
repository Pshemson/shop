import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Slider from '../Slider';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {

        render() {
            return (
                <div>
                    <Header />
                    <Slider />
                </div>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app'),
    );
});