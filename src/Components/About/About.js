import React from 'react';
import aboutpic from '../../images/karate-trophy-awards-327hm8.png';
import aboutPic from '../../images/Theme-Collection-Sports-Bowl-Wrestling-MA.jpg';
import './About.css';
const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>WHY <span className="tag">CHOOSE</span> US</h1>
                <h2>25+ Years of Experience in Human Resource Management</h2>
                <h2 className="about-text">We make sure that One can gain <span className="must">Self Confidence</span> to thyself.He/She could protect thyself in any Situation</h2>
                <h4 className="about-text1">The primary importance of self-defence is for women to be able to protect themselves against anything that's unacceptable in terms of social conduct. 2. Confidence: There is nothing more empowering than having the confidence to analyse a dangerous situation and take actions to overcome them effectively.</h4>
                <h1>We Also Provide <span className="must">Cirtificate</span></h1>
            </div>
            <div>
                <img src={aboutpic} alt="" />
                <img src={aboutPic} alt="" />
            </div>

        </div>
    );
};

export default About;