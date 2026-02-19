import React, { Component } from 'react';
import "./Navbar.css"
import logo from "./../assets/Logo.png";
import NavText from './NavText';
import profile from "./../assets/profile.png"

const Navbar = () => {
    return ( 
    <nav className="navbar">
  <div className="navbar-container">
    <img src={logo} alt="" className="logo" />
    <div className='nav-text-container'>
    <NavText text="Home" css="text"></NavText>
    <NavText text="Services" css="text"></NavText>
    <NavText text="Forum" css="text"></NavText>
    <NavText text="Contact us" css="text"></NavText>
    </div>
    <img src={profile} alt="" />
  </div>
</nav>
     );
}
 
export default Navbar;