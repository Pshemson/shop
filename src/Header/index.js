import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="container headerContainer">
                <a className="mobileLogo" href="#"><img src="src/images/favicon.png"/></a>
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
                    <span><a href="#" ><img src="src/images/glass1.png"/></a></span>
                    <span><a href="#">Profile</a></span>
                    <span><a href="#">Basket</a></span>
                </div>

            </div>
        );
    }
}

export default Header;
