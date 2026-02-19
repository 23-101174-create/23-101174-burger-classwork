import React, { Component } from 'react';
import "./Home.css"
import Navbar from '../components/Navbar';
import SectionCard from '../components/SectionCard';
import SectionCard2 from '../components/SectionCard2';
import Footer from '../components/Footer';
import FooterLast from '../components/FooterLast';

const Home  = () => {
    return ( <>
    <div className="home">
        <Navbar />
    <section className='section-container'>
        <div className='cards-box'>
            <SectionCard />
        </div>
        <div className='cards-box'>
            <SectionCard2 />
        </div>
    </section>
        <footer className='footer-container'>
        <Footer />
        </footer>

    </div>
</>);
}
 
export default Home ;