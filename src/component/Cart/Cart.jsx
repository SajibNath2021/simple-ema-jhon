import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {price, stock, shipping} = cart;
    
    let totalPrice = 0;
    let totalShippingCharge = 0
    let quantity =0
    for(const product of cart){
        product.quantity= product.quantity || 1;
        totalPrice = totalPrice + product.price*product.quantity;
        totalShippingCharge = totalShippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    let totalTax = totalPrice*5 / 100;
    let grandTotal = totalPrice + totalShippingCharge + totalTax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Item:{quantity} </p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShippingCharge}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <p>Grand total:{grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;