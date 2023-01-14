import React from 'react'
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './About.css'

function About() {
  const [contactHovered, setContactHover] = useState('off'); 

  return (
    <div className="container-fluid about">
      <div className="row about-row">
        <div className="col col-lg-6 col-md-12 col-sm-12 col-12 about-information gx-0">
          <div className='information-container'>
            <h1 className='about-intro'>Hey, I'm Alder Whiteford.</h1>
            <div className='about-info'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </div>
            <div className="about-contact">
              <img className={contactHovered === 'on' ? 'contact-hover' : ""}src="https://cdn-icons-png.flaticon.com/512/66/66831.png"></img>
              <a className='link-hover' href='/contact' onMouseEnter={() => setContactHover('on')} onMouseLeave={() => setContactHover('off')}>Get in Touch</a>
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-md-12 col-sm-12 col-12 about-photos gx-0">
          <img id="profile-img" className="about-profile-image" src="https://i.imgur.com/ceqVq0p.jpeg" alt=""></img>
          <div className="about-img-info">
            <div className="img-info-txt">Nikon D7100 | Tamron AF 18-270mm F3.5-6.3</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About