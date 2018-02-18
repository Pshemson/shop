import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <div className="container productsContainer">
                <h2>Products</h2>
                <ul className="productsList">
                    <li className="singleProduct">
                        <img src="#" />
                        <h3>Product name 1</h3>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Products;
