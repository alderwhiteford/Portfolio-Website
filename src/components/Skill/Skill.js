import React from 'react'
import './Skill.css'

function Skill({skills}) {
  const skillItems = skills.map((skill) => <div className='skill' style={{backgroundColor: skill.color}}>{skill.title}</div>)

  return (
    <div class='skills'>
      <div class='skills-div'>
        {skillItems}
      </div>
    </div>
  )
}

export default Skill