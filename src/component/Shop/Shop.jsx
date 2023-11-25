import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
 //Cart
    const [cart, setCart] = useState([]);
    
    const handleAddToCart=(product)=>{
        const totalproduct = [...cart, product];
        setCart(totalproduct);
    }
    return (
        <div className='Shop-Container'>
            <div className='Products-Container'>
                {
                    products.map(data =>
                        <Product 
                        key={data.name}
                        product={data}
                        handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className='Cart-Container'>
                <h2>Shopping Cart</h2>
                <p>Total Product:{cart.length} </p>
            </div>
        </div>
    );
};

export default Shop;