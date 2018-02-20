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
                        <li>HOME &or;</li>
                        <li>Shop &or;</li>
                        <li>Blog &or;</li>
                        <li>Pages</li>
                        <li>Fresh Meat</li>
                        <li>Vegetables</li>
                        <li>Fruits</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
