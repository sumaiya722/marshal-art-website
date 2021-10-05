import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="title">
                <h1>Follow Us</h1>
                <h2>Phone:+0179845786</h2>
                <h2>Email:martialarts123@email.com</h2>
            </div>

            <div className="icon">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
        </div>
        // <h1>+0179845786</h1>
    );
};

export default Footer;