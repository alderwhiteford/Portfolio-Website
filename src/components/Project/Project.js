import React from 'react'
import Skill from '../Skill/Skill'
import './Project.css'

function Project({skills, title, description, image, children}) {
  return (
    <div class='project'>
        <div class='project-header'>
            <h1>{title}</h1>
        </div>
        { skills && <Skill skills={skills}/> }
        <div class='row project-information'>
          <div class='col col-lg-12 col-12'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Project