import React, { Component } from 'react';
import "./FooterText.css"
import Icons from './Icons';
import FooterLast from './FooterLast';

const FooterText = () => {
    return ( <>
    <div className='containerall'>
    <div className='containericon'>
    <div className='header'>Header</div>
    <div className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum </div>
    <Icons />
    </div>
    <FooterLast />
    </div>


    </> );
}
 
export default FooterText;