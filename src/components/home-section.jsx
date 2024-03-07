import { useState, useEffect } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import '../css-sheets/home-section.css';

function Home_section() {


    return (

        <div className='home-container-content'>
        <div className='home-containter-head'>
        </div>
        <div className='home-container-body'> 

          <div className='home-mission-div'>
            <br/>
            <h1>Welcome to</h1>
              MOJAVE TECHNICAL SOLUTIONS
            <h3>Designing the Future</h3>
            <br/>
            
          </div>

          <div>
            <img src='Plain-Mojave2.png' className='home-image'></img>
          </div>
          <br/>
        
        </div>
        <div className='home-containter-foot'>
          <FaFacebook className='contact-icon'/>
          <RiTwitterXFill className='contact-icon'/>
          <FaInstagram className='contact-icon'/>
          <FaLinkedin className='contact-icon'/>
        </div>
        
      </div>

    );
}

export default Home_section;




