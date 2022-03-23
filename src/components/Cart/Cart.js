import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    return (
        <div>
             <h5>order summary</h5>
        <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;