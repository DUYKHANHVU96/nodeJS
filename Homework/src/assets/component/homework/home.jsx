import React from 'react';
import './home.css';

const Home = (props) => {
    return (
        <div className="product-card">
            <img src={props.img} alt={props.name} className="product-image"/>
            <h3 className="product-title">{props.name}</h3>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
            <button className="add-to-cart-button">{props.button}</button>
        </div>
    )
}

export default Home;
