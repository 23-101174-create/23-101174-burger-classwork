import React, { Component } from 'react';
import "./SectionCard2.css"
import Title from './Title';
import Subtitle from './Subtitle';
import ButtonCircle from './ButtonCircle';
import CartButton from './CartButton';
import burgerbbq from "./../assets/BBQ-Bacon-Burger.jpg"
import burgerspicy from "./../assets/Spicy-Jalapeño-Burger.jpeg"
import Mushroom from "./../assets/Mushroom-Swiss.webp"

const SectionCard2  = () => {
    return ( <>
    <div className='card'>
    <img className='image' src={burgerbbq} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="BBQ Bacon Burger" css2="text2"/>
    <Title text2="$6.49" css2="text2"/>
    </div>
    <Subtitle text3="Beef patty, crispy bacon, BBQ sauce, onion rings, cheddar cheese" css3="text3"/>
     <div className='button-container'>
    <ButtonCircle />
    <CartButton />
    </div>
    </div>
    </div>


    <div className='card'>
    <img className='image' src={burgerspicy} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="Spicy Jalapeño Burger" css2="text2"/>
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
    <img className='image' src={Mushroom} alt=""/>
    <div className='container-box'>
    <div className='container-title'>
    <Title text2="MushroomSwis Burger" css2="text2"/>
    <Title text2="$5.89" css2="text2"/>
    </div>
    <Subtitle text3="Beef patty, sautéed mushrooms, swiss cheese, garlic sauce" css3="text3"/>
     <div className='button-container'>
    <ButtonCircle />
    <CartButton />
    </div>
    </div>
    </div>

    
    
    </> );
}
export default SectionCard2 ;