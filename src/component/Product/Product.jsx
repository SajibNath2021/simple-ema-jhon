import React from 'react';
import './Product.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
    const { img, price, stock, seller, name, ratings, ratingsCount } = props.product;
    const handleAddToCart= props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>Product Name: {name}</h4>
                <h3>Price:${price}</h3>
                <p>Brand: {seller}</p>
                <p>Rating:{ratings} stars</p>
                <p>Total Rating:{ratingsCount} User</p>
                <button onClick={()=>handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>

        </div>
    );
};

export default Product;