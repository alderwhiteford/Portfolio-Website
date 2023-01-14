import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

function Header({logo, background, position, dates, route}) {
    const [hoverState, setHoverState] = useState(false); 
    return (
        <NavLink to={route}>
            <div className="header">
                <div className="header-background" style={{backgroundImage: `url(${background})`}}></div>
                <div className={hoverState ? "darker-cover" : "dark-cover"}></div>
                <img className={hoverState ? "header-logo-hidden" : "header-logo"} id="logo-id" src={logo} alt=""></img>
                <div onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)} className="header-info" id="header-id" to='/about'>
                    <div className="header-info-background">
                        <div className="row header-info-row">
                            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 gx-0 header-info-left">
                                <img className="header-info-image" src={logo}></img>
                                <div className="header-info-text">
                                    <h3 className="header-position">{position}</h3>
                                    <h4 className="header-dates">{dates}</h4>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 gx-0 header-info-right">
                                <div>
                                    <a className="header-learn-more learn-more-hover">Click to learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Header