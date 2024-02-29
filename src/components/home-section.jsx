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
          <h1>Welcome to Mojave Technical Solutions</h1>
        </div>
        <div className='home-container-body'> 

          <div className='home-mission-div'>
            <br/>
            <ul> 
                <li><h2>Cutting-edge Solutions</h2></li>
                <br/>
                <li><h2>A Tradition of Excellence</h2></li>
                <br/>
                <li><h2>Professional Teams</h2></li>
                <br/>
                <li><h2>A Strong Commitment to our Clients</h2></li>
            </ul>
            <div className='home-button-div'>
              <button className='home-start-button'>START HERE</button>
            </div>
            
          </div>

          <div>
            <img src='industrial.png' className='home-figure'></img>
          </div>
        
        </div>
        <div className='home-containter-foot'>
          <FaFacebook className='social-icon'/>
          <RiTwitterXFill className='social-icon'/>
          <FaInstagram className='social-icon'/>
          <FaLinkedin className='social-icon'/>
          
        </div>
        
      </div>

    );
}

export default Home_section;




