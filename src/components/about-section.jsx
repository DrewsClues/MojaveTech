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
                <div className='containter-head'>
                  <h1>ABOUT US</h1>
                </div>
                <div className='container-body'> 

                  <div className='about-text1-div'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tortor a augue sodales, vitae efficitur magna sagittis. Mauris consequat tincidunt libero, non eleifend nulla tincidunt a. Nullam a nisi vel ligula vehicula tempus. Donec lobortis, magna et dignissim congue, elit arcu convallis lacus, a vehicula ex metus nec libero. Vivamus eget ipsum sed arcu molestie dapibus a et nisl. Fusce id dui nec mi sollicitudin auctor at ac risus. Aliquam at mi tristique, fringilla justo id, viverra felis. Nullam vulputate nunc ac lectus dignissim, sed varius quam scelerisque. Cras id fringilla nulla, nec vestibulum libero. Vivamus sed ipsum vel elit faucibus egestas nec nec turpis. Sed id nisi sed nisi interdum bibendum. Integer eu sapien nec dui elementum suscipit. Sed eget arcu sit amet augue placerat rhoncus. Nunc non convallis sem.

                    </p>

                    
                  </div>

                  <div className='aboutfigure-div'>
                    <img src='Harold2.png' className='about-figure'></img>
                    <p className="about-subheading"> CEO and founder 
                    <br/>Harold Szenvedés</p>
                  </div>
                
                </div>

                
              </div>

    );
}

export default About_section;




