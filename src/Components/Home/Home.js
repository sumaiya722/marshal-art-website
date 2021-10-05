import React from 'react';
import logo from '../../images/martialz2.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className="home-part">
            <div className="home-title">

                <h1>We Created <span
                    className="tag">Professional</span> <span className="tag2">Warriors</span></h1>
                <p>“Never forget that, at the most, the teacher can give you fifteen percent of the art. The rest you have to get for yourself through practise and hard work. I can show you the path but I can not walk it for you.”</p>
            </div>

            <div>
                <img className="logo" src={logo} alt="" />
            </div>


        </div>
    );
};

export default Home;