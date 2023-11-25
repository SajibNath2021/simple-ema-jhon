import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { img, price, stock, seller, name, rating, ratingCount } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>Product Name: {name}</h4>
                <h3>Price:${price}</h3>
                <p>Brand:{seller}</p>
                <p>Rating:{rating} stars</p>
                <p>Total Rating:{ratingCount}</p>
                <button>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;