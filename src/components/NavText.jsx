import React, { Component } from 'react';
import "./NavText.css"

const NavText = (props) => {
    return ( <>
    <div className= {props.css} > {props.text} </div>
    </> );
}
 
export default NavText;