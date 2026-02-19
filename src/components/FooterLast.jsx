import React, { Component } from 'react';
import "./FooterLast.css"
import FooterText2 from './FooterText2';

const FooterLast = () => {
    return ( <>
    <div className='headertext'>
        <div className='text-header'>Header Text</div>
        <FooterText2 text5='Home' s="small-text"/>
        <FooterText2 text5='Search' s="small-text"/>
        <FooterText2 text5='Location' s="small-text"/>
        <FooterText2 text5='Message' s="small-text"/>
    </div>
    </> );
}
 
export default FooterLast;