import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='Shop-Container'>
            <div className='Products-Container'>
                {
                    products.map(data=> <Product product={data}></Product>)
                }
            </div>
            <div className='Cart-Container'>
                <h2>Shopping Cart</h2>
            </div>
        </div>
    );
};

export default Shop;