import { useState, useEffect } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import '../css-sheets/about-section.css';

function About_section() {


    return (

        <div className='about-container-content'>
                <div className='about-container-head'>
                  <h1>ABOUT US</h1>
                </div>
                <div className='container-body'> 

                    <div className='about-text1-div'>
                        <p className='about-paragraph'>
                        Established in 1985 under the visionary leadership of CEO and founder Harold Szenvedés, Mojave Technical Solutions has emerged as a pioneering force in the realm of cutting-edge technical solutions. With a steadfast commitment to excellence and innovation, we have revolutionized industries through our comprehensive suite of services. Specializing in industrial automation, control systems integration, and process optimization, we drive efficiency and sustainable growth. Our expert team tailors bespoke solutions, integrating robotics and AI to empower businesses in competitive landscapes. With unwavering dedication, we ensure client satisfaction through collaboration and innovation.                    </p>
                    </div>

                    <div className='aboutfigure-div'>
                        <img src='Harold2.png' className='about-figure'></img>
                        <div className="about-subheading">
                            <p>CEO and founder</p>
                            <p>Harold Szenvedés</p>
                        </div>
                    </div>

                
                </div>

                
              </div>

    );
}

export default About_section;




