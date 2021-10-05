import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-head">
                <h1>Contact Info</h1>
                <p>
                    We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the charms of pleasure moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.
                </p>

                <h2>Phone:+0179845786</h2>
                <h2>Email:martialarts123@email.com</h2>

            </div>
            <div>
                <h3>Contact Us</h3>
                <h1>Get In Touch</h1>
                <h5>Fill the form</h5>
                <input className="email" type="name" placeholder="Email" />
                <br />
                <input className="passward" type="text" placeholder="Password" />
                <br />
                <input className="address" type="text" placeholder="Address" />
                <br />
                <p>
                    Is our service is much beneficial for you?
                    <br />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </p>
                <button className="btn">Submit</button>
            </div>
        </div>
    );
};

export default Contact;