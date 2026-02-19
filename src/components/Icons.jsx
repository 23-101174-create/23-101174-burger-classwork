import React, { Component } from 'react';
import "./Icons.css"
import search from "./../assets/search.png"
import message from "./../assets/message.png"
import location from "./../assets/location.png"
import home from "./../assets/home.png"

const Icons = () => {
    return (<>
    <div className='icon-container'>
        <img className='image2' src={search} alt=''/>
        <img className='image2' src={message} alt=''/>
        <img className='image2' src={location} alt=''/>
        <img className='image2' src={home} alt=''/>
    </div>
    </> );
}
 
export default Icons;