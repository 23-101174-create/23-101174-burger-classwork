import React, { Component } from 'react';
import "./SectionCard.css"
import burger from "./../assets/burger.png"
import Title from './Title';
import Subtitle from './Subtitle';
import ButtonCircle from './ButtonCircle';
import CartButton from './CartButton';
import burgerdouble from "./../assets/double-burger.png"
import burgeravocado from "./../assets/avocado.webp"

const SectionCard  = () => {
    return ( <>
    <div className='card'>
    <img className='image' src={burger} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="Classic Cheeseburger" css2="text2"/>
    <Title text2="$4.99" css2="text2"/>
    </div>
    <Subtitle text3="Ground beef, Cheese, Burger bun, Lettuce, Egg, Pickled cucumbers, Sliced tomatoes." css3="text3"/>
     <div className='button-container'>
    <ButtonCircle />
    <CartButton />
    </div>
    </div>
    </div>


    <div className='card'>
    <img className='image' src={burgerdouble} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="Double Cheese Burger" css2="text2"/>
    <Title text2="$5.99" css2="text2"/>
    </div>
    <Subtitle text3="Double beef patties, cheddar cheese, pickles, ketchup, toasted bun" css3="text3"/>
     <div className='button-container'>
    <ButtonCircle />
    <CartButton />
    </div>
    </div>
    </div>

    <div className='card'>
    <img className='image' src={burgeravocado} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="Beef Avocado Burger" css2="text2"/>
    <Title text2="$5.49" css2="text2"/>
    </div>
    <Subtitle text3="Juicy beef patty, avocado slices, lettuce, tomato, honey mustard sauce" css3="text3"/>
     <div className='button-container'>
    <ButtonCircle />
    <CartButton />
    </div>
    </div>
    </div>
    </> );
}
export default SectionCard ;