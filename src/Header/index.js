import React from 'react';

class Header extends React.Component {

    // Lifecycle w ktorym zaladowany jest
    componentDidMount() {

    }

    render() {

        return (
            <div className="container headerContainer">
                <a href="#">
                    <img className="mobileLogo" src="src/images/favicon.png"/>
                    <h1 className="logo"><span>Green</span>Mart</h1>
                </a>
                <div className="searchContainer">
                    <input placeholder="Search..."/>
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
                    <span><button className="hamburger"/></span>
                    <a href="#" ><img className="glassBtn" src="src/images/glass1.png"/></a>
                    <a href="#"><img className="mobileBtn" src="src/images/avatar.png"/></a>
                    <a href="#"><img className="mobileBtn" src="src/images/cart.png"/></a>
                </div>

            </div>
        );
    }
}

export default Header;
