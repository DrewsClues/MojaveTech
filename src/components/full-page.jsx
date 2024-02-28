import { useState, useEffect } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



import '../css-sheets/full_page.css';
import About_section from './about-section';

function Full_Page() {
    const [count, setCount] = useState(0);
    let currentIndex = 0;


   
  function Sidebar(){

    const scrollToDiv = (id) => {
      const div = document.getElementById(id);
      if (div) {
          div.scrollIntoView({ behavior: 'smooth' });
      }
      };
    
    return(
    <div className='sidebar'>
        <div className="sidebar-item" onClick={() => scrollToDiv('content-1')}><FaDotCircle /></div>
        <div className="sidebar-item" onClick={() => scrollToDiv('content-2')}><FaDotCircle /></div>
        <div className="sidebar-item" onClick={() => scrollToDiv('content-3')}><FaDotCircle /></div>
        <div className="sidebar-item" onClick={() => scrollToDiv('content-4')}><FaDotCircle /></div>
    
    </div>
    )
  }




    useEffect(() => {
        const container = document.querySelector('.vertical-container');
        if (container) {
            container.addEventListener('wheel', handleWheel);

            return () => {
                container.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    const handleWheel = (event) => {
        event.preventDefault();

        const deltaY = event.deltaY;
        const container = document.querySelector('.vertical-container');
        const scrollHeight = container.clientHeight;
        const numDivs = container.children.length;
        const targetIndex = currentIndex + (deltaY > 0 ? 1 : -1);

        if (targetIndex >= 0 && targetIndex < numDivs) {
            currentIndex = targetIndex;
            const targetScrollPosition = scrollHeight * currentIndex;
            container.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
        }
    };

    return (
      <>
      <Sidebar/>
        <div className='vertical-container'>
            <div id="content-1" className="vertical-scroll-item1">
              <div className='container-content'>
                <div className='containter-head'>
                  <h1>Welcome to Mojave Technical Solutions</h1>
                </div>
                <div className='container-body'> 

                  <div className='mission-div'>
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
                    <div className='button-div'>
                      <button className='start-button'>START HERE</button>
                    </div>
                    
                  </div>

                  <div>
                    <img src='industrial.png' className='home-figure'></img>
                  </div>
                
                </div>
                <div className='containter-foot'>
                  <FaFacebook className='social-icon'/>
                  <RiTwitterXFill className='social-icon'/>
                  <FaInstagram className='social-icon'/>
                  <FaLinkedin className='social-icon'/>
                  
                </div>
                
              </div>

            </div>
           
            <div id="content-2" className="vertical-scroll-item2"><About_section/></div>
            <div id="content-3" className="vertical-scroll-item3">Content 3</div>
            <div id="content-4" className="vertical-scroll-item4">Content 4</div>
        </div>
      </>
    );
}

export default Full_Page;
