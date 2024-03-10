import Accordion from 'react-bootstrap/Accordion';

import '../css-sheets/help-section.css';
import { AiOutlineTool } from "react-icons/ai";
import { LuBadgeHelp } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";





function Help_section() {


    return (

        <div className='help-container-content'>
                <div className='about-help-head'>
                  <h1>FAQs/Help Center</h1>
                </div>

                <div className='help-container-body'> 

                  <div className='help-card'>
                    <FaHandsHelping className='help-icon'/>
                    <h3>General Help</h3>
                    <p className='help-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>

                  <div className='help-card'>
                    <LuBadgeHelp className='help-icon'/>
                    <h3>Common Questions</h3>
                    <p className='help-paragraph'>Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                  </div>

                  <div className='help-card'>
                    <AiOutlineTool className='help-icon'/>
                    <h3>Client Support</h3>
                    <p className='help-paragraph'>Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>


                  <div className='help-text2-div'>

                  </div>

                </div>



                
      </div>

    );
}

export default Help_section;




