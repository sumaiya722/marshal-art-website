import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <h1> <i className="fas fa-award"></i>MARTIAL ARTS</h1>
            </div>
            <nav>
                {/* <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact Us</a> */}
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/contact">Contact</Link>

            </nav>
        </div>
    );
};

export default Header;