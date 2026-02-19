import React, { Component } from 'react';
import "./CartButton.css"
import cart from "./../assets/cart.png";

const CartButton  = () => {
    return ( <>
    <button className='buttoncart'>
    <img src={cart} alt="" />
    Buy Now</button>


    </> );
}
 
export default CartButton ;