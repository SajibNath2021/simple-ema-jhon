import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    //Cart
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const totalproduct = [...cart, product];
        setCart(totalproduct);
        addToDb(product.id)
    }

    //get local storage data
    useEffect(() => {
        //step1:get id
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            //step:2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            //step 3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            console.log(addedProduct);
        }
        //step 5: se the cart
        setCart(saveCart)
    }, [products]) //dependenci  produts r data change hole call kore aber


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
                <Cart cart={cart} key={cart.name}></Cart>
            </div>
        </div>
    );
};

export default Shop;