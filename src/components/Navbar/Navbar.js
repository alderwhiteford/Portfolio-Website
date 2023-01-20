import React from 'react'; 
import { useState } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';



function Navbar() {
    const [navState, setNavState] = useState(false); 
    const [activePage, setActivePage] = useState('contact'); 

    return (
      <nav className="navbar navbar-expand-md navbar-main navbar-dark" style={{backgroundColor: "#FAF9F6"}}>
        <div className="navbar-left">
            <NavLink className="navbar-title" to="/" onClick={() => setActivePage('')}>
                <h1>Alder Whiteford</h1>
            </NavLink>
        </div>
        <button className={navState ? "navbar-toggler d-flex d-md-none flex-column justify-content-around" : "navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around"} data-bs-target="#navbar" onClick={() => navState ? setNavState(false) : setNavState(true)}>
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className={navState ? "navbar-links collapse navbar-collapse show" : "navbar-links collapse navbar-collapse"} id="navbar">
            <ul className="navbar-nav">
                <li className={activePage === "work" ? "nav-item link-hover activePage" : "nav-item link-hover"}>
                    <NavLink className="nav-link" to="/Portfolio-Website/work" onClick={() => setActivePage('work')}>work</NavLink>
                </li>
                <li className={activePage === "projects" ? "nav-item link-hover activePage" : "nav-item link-hover"}>
                    <NavLink className="nav-link" to="/Portfolio-Website/projects" onClick={() => setActivePage('projects')}>projects</NavLink>
                </li>
                <li className={activePage === "photos" ? "nav-item link-hover activePage" : "nav-item link-hover"}>
                    <NavLink className="nav-link" to="/Portfolio-Website/photos" onClick={() => setActivePage('photos')}>photos</NavLink>
                </li>
                <li className={activePage === "contact" ? "nav-item link-hover activePage" : "nav-item link-hover"}>
                    <NavLink className="nav-link" to="/Portfolio-Website/contact" onClick={() => setActivePage('contact')}>contact</NavLink>
                </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar