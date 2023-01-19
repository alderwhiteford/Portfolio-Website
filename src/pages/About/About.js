import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './About.css'

function About() {
  const [contactHovered, setContactHover] = useState('off'); 
  const [resumeHovered, setResumeHover] = useState('off')

  return (
    <div className="container-fluid about">
      <div className="row about-row">
        <div className="col col-lg-6 col-md-12 col-sm-12 col-12 about-information gx-0">
          <div className='information-container'>
            <h1 className='about-intro'>Hey, I'm Alder Whiteford.</h1>
            <div className='about-info'>
              <p> I am a third-year, computer science and finance student at Northeastern University. Please pardon my website's dust at the moment! The project is currently under development, and will be complete before you know it. In the meantime grab yourself a cup of coffee, checkout my resume, and (of course) connect with me on LinkedIn!</p>
              <p>I was born and raised in Portland, OR &#127794; and am currently based in Boston, MA &#129752;.</p>
            </div>
            <div className="about-contact">
              <img className={contactHovered === 'on' ? 'contact-hover' : ""}src="https://cdn-icons-png.flaticon.com/512/66/66831.png"></img>
              <NavLink to={'/contact'} className='link-hover' onMouseEnter={() => setContactHover('on')} onMouseLeave={() => setContactHover('off')}>
                Get in touch
              </NavLink>          
            </div>
            <div className="about-resume">
              <img className={resumeHovered === 'on' ? 'resume-hover' : ""} src='https://i.imgur.com/stFJBB5.png'></img>
              <a href='https://s3.amazonaws.com/symp.csm.usprod/northeastern/files/adb/adb8244d225c5d8191d89dd27aba52d2.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAID3RBESXBCESHUGA%2F20230119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230119T185845Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=47eabfa59d06a98a83e59e6cd96a47465a225bcc7eb2163e6801e21361f7a4c4' target='_blank' className='link-hover' onMouseEnter={() => setResumeHover('on')} onMouseLeave={() => setResumeHover('off')}>
                Resume
              </a>  
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
    </div>
  )
}

export default About