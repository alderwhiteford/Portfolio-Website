import React from 'react'
import Project from '../../../components/Project/Project'
import Skill from '../../../components/Skill/Skill'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'

function HAN() {
  return (
    <div>
      <WorkExpHeader logo={'https://i.imgur.com/rOFQAMh.png'} background={'https://i.imgur.com/fCbFz8N.png'} position={"Junior\n Associate"} dates={"Jan. 2022 - Present"} description={'HAN is a student-run organization whose mission is to grow the Northeastern venture community by connecting vetted and investment-ready start-ups to a global investor network of angel investors and venture capital firms. Since its foundation in 2017, the club has successfuly connected partnering ventures with $5.2 million in funding.'} website='https://huntingtonangelsnetwork.com/'/>
      <Project title="Junior Associate Responsibilities" description={<div><ul><li>Lead 10+ calls per semester with founders of Northeastern affiliated start-ups and organize club-wide pitches.</li><li>Prepare 5+ pre-pitch due diligence forms and company one-pagers detailing venture finances, leadership, product, etc.</li><li>Offer feedback for 8+ start-up pitches per semester that targets both presentation and deck content.</li><li>Facilitate deal flow by connecting our partnered ventures with 3-5 potential investors with relevant investment theses.</li></ul></div>}/>
    </div>
  )
}

export default HAN