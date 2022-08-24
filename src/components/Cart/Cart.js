import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props);
  const {name} = props.cart;
  const getName = `${name.first} ${name.last}`;
    return (
        <div className="cart">
            
            <h3>{getName}</h3>
        </div>
    );
};

export default Cart;