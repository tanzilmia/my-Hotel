import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div className='header_bg'>
            <div className='navbar'>
            <Navbar></Navbar>
            </div>
            <h2>Wellcome Habibi, Book Now Your Rooms</h2>
        </div>
    );
};

export default Header;