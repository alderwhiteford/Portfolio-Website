import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css'

function Contact() {

  const [contactState, setContactState] = useState('none');

  return (
    <div className="container-fluid contact">
        <div className="row contact-row">
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12 contact-col-left">
              <a href='tel:9713730303'> 
                <div onMouseEnter={() => setContactState('phone')} onMouseLeave={() => setContactState('none')} className={contactState === 'phone' ? 'active-contact-item contact-phone' : contactState === 'none' ? "contact-item contact-phone" : "unactive-contact-item contact-phone" }></div>
              </a>
              <a href='mailto: whiteford.a@northeastern.edu'>
                <div onMouseEnter={() => setContactState('email')} onMouseLeave={() => setContactState('none')} className={contactState === 'email' ? 'active-contact-item contact-email' : contactState === 'none' ? "contact-item contact-email" : "unactive-contact-item contact-email" }></div>
              </a>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12 contact-col-right">
              <a href='https://www.linkedin.com/in/alder-whiteford-929886228/' target='_blank'>
                <div onMouseEnter={() => setContactState('linked')} onMouseLeave={() => setContactState('none')} className={contactState === 'linked' ? 'active-contact-item contact-linkedIn' : contactState === 'none' ? "contact-item contact-linkedIn" : "unactive-contact-item contact-linkedIn" }></div>
              </a>
              <a href='https://www.instagram.com/aldersgallery/' target='_blank'>
                <div onMouseEnter={() => setContactState('insta')} onMouseLeave={() => setContactState('none')} className={contactState === 'insta' ? 'active-contact-item contact-insta' : contactState === 'none' ? "contact-item contact-insta" : "unactive-contact-item contact-insta" }></div>
              </a>
          </div>
        </div>
    </div>
  )
}

export default Contact