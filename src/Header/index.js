import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="container headerContainer">
                <h1><a className="logo" href="#"><span>Green</span>Mart</a></h1>

                <div className="searchContainer">
                    <input placeholder="I'm searching for..."/>
                    <span>SEARCH</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home &or;</a>
                        </li>
                        <li>
                            <a href="#">Shop &or;</a>
                        </li>
                        <li>
                            <a href="#">Blog &or;</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">Fresh Meat</a>
                        </li>
                        <li>
                            <a href="#">Vegetables</a>
                        </li>
                        <li>
                            <a href="#">Fruits</a>
                        </li>
                    </ul>
                </nav>
                <div className="mobileMenu">
                    <span><button className="hamburger"></button></span>
                    <span><a href="#">Search</a></span>
                    <span><a href="#">Profile</a></span>
                    <span><a href="#">Basket</a></span>
                </div>

            </div>
        );
    }
}

export default Header;
