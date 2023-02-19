import React from 'react'
import { NavLink } from 'react-router-dom'
import './WorkExpHeader.css'

function WorkExpHeader({logo, background, position, dates, description, website}) {
  return (
    <div class='work-exp-header'>
        <div class='work-exp-banner' style={{backgroundImage: `url(${background})`}}>
            <div class='work-exp-dark-cover'/>
            <a href={website} target='_blank'>
                <img class='work-exp-logo' src={logo} alt=''></img>
            </a>
            </div>
        <div class='work-exp-information row'>
                <div class='col col-lg-4 col-md-4 col-sm-12 col-12 work-exp-title'>
                    <div>
                        <h1>{position}</h1>
                        <h3>{dates}</h3>
                    </div>
                </div>
                <div class='col col-lg-8 col-md-4 col-sm-12 col-12 work-exp-overview'>
                    {description}
                </div>
        </div>
    </div>
  )
}

export default WorkExpHeader