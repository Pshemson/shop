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
                    <div className="rightMenu">
                        <li>Hello</li>
                        <li>Login</li>
                        <img src="src/images/carticon.png"/>
                        <span>My cart &or;</span>
                        <span>$0.00</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
