import { useState, useEffect } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import '../css-sheets/services-section.css';

function Services_section() {


    return (

        <div className='services-container-content'>
        <div className='services-containter-head'>
          <h1>Our Services</h1>
        </div>
        <div className='services-container-body'> 

            <div class='service-table'>
                <div class='service-text1-div'>
                    <table>
                        <tr>
                            <td><button class='service-button'>Industrial Automation Solutions</button></td>
                            <td><button class='service-button'>Remote Monitoring and Diagnostics</button></td>
                        </tr>
                        <tr>
                            <td><button class='service-button'>Control Systems Integration</button></td>
                            <td><button class='service-button'>Engineering and Design Services</button></td>
                        </tr>
                        <tr>
                            <td><button class='service-button'>Process Optimization</button></td>
                            <td><button class='service-button'>Training and Education</button></td>
                        </tr>
                        <tr>
                            <td><button class='service-button'>Robotics and AI Integration</button></td>
                            <td><button class='service-button'>Consulting and Advisory Services</button></td>
                        </tr>
                        <tr>
                            <td><button class='service-button'>Cybersecurity Solutions</button></td>
                            <td><button class='service-button'>Env. and Sustainability Solutions</button></td>
                        </tr>
                    </table>
                </div>
            </div>

          
        </div>
        
      </div>

    );
}

export default Services_section;




