import React from 'react';

class Products extends React.Component {
    render() {
        return (
            <div className="container productsContainer">
                <ul className="tabList">
                    <li>
                        <a href="#">
                            <img src="src/images/milk.png" />
                            Milk & Cream
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src/images/fried-egg.png" />
                            Butter & Eggs
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src/images/fruits.png" />
                            Fruits
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src/images/carrot.png" />
                            Vegetables
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src/images/fish.png" />
                            Ocean Foods
                        </a>
                    </li>
                </ul>
                <h2>Products</h2>
                <ul className="productsList">
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-eggs.jpg" />
                        <h3>Eggs</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-milk.jpg" />
                        <h3>Milk</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-fruits.jpg" />
                        <h3>Fruits</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-fish.jpg" />
                        <h3>Fish</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-vege.jpg" />
                        <h3>Vegetables</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-eggs.jpg" />
                        <h3>Eggs</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-fruits.jpg" />
                        <h3>Fruits</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-milk.jpg" />
                        <h3>Milk</h3>
                        </a>
                        <div>
                            <span>99,00$</span>
                            <span>Buy</span>
                        </div>
                    </li>
                    <li className="singleProduct">
                        <a href="#">
                        <img src="src/images/product-vege.jpg" />
                        <h3>Vegetables</h3>
                        </a>
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
