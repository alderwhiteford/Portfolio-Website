import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import './Experience.css'
import Skill from '../../../components/Skill/Skill'

function HAN() {
  return (
    <div>
      <WorkExpHeader logo={'https://i.imgur.com/rOFQAMh.png'} background={'https://i.imgur.com/fCbFz8N.png'} position={"Senior\n Associate"} dates={"Jan. 2022 - Present"} description={'HAN is a student-run organization whose mission is to grow the Northeastern venture community by connecting vetted and investment-ready start-ups to a global investor network of angel investors and venture capital firms. Since its foundation in 2017, the club has successfuly connected partnering ventures with $5.2 million in funding.'} website='https://huntingtonangelsnetwork.com/'/>
      <Project title="Example Engagement - serviceMob" description="Working alongside a club Vice President and fellow Junior Associate, I helped engage with Servicemob - a cloud-based analytics platform designed to offer critical insights on the performance of customer service operations. I was responsible for providing detailed pitch feedback on their slide deck, preparing a one-pager dilligence document, and contributing to an end of semester report detailing the company's market, financials, team, and other investment KPIs. Our engagement culminated in 3 investor introductions and a tentative agreement for a venture capital firm to take the role of lead investor for serviceMob's next round of funding."/>
      <div class='work-page'>
        <img class='center-image' src='https://i.imgur.com/MthVCgd.png' alt=''/>
      </div>
      <Project title="Project - Refresh Huntington Angels Network Website" skills={[{"color":"#ffffba", "title": "JavaScript"}, {"color": '#bae1ff', "title": "GraphQL"}, {"color": '#ffb3ba', "title": "Contentful"}]}>
        <div>
          The goal of this project was refresh the Huntington Angels Network Website to reflect current club operations and progress since the web app's initial development back in 2021.
          After coordinating with the past engineers to gain access to the repository, I implemented the following changes per the requests of managing directors and associates:
          <br/>
          <br/>
          <ul>
            <li>
              Update all user profiles to include new biographies, internship information, and headshots. 
            </li>
            <li>
              Extend the venture component to allow the addition of working / completed documents that provide information about company engagements.
            </li>
            <li>
              Adapt styling across the website to support viewing on mobile devices.
            </li>
            <li>
              Reword portions of the language to better fit the club's evolved value proposition and guarunteed services.
            </li>
            <li>
              Source new client testimonials to feature on the homepage.
            </li>
          </ul>
          View the website <a href="https://huntingtonangelsnetwork.com/" target='_blank'>here</a>
        </div>
      </Project>
      <Project title="Senior Associate Responsibilities">
        <div>
          <ul>
            <li>
              Lead 10+ calls per semester with founders of Northeastern affiliated start-ups and organize club-wide pitches.
            </li>
            <li>Prepare 5+ pre-pitch due diligence forms and company one-pagers detailing venture finances, leadership, product, etc.
            </li>
            <li>
              Offer feedback for 8+ start-up pitches per semester that targets both presentation and deck content.
            </li>
            <li>
              Facilitate deal flow by connecting our partnered ventures with 3-5 potential investors with relevant investment theses.
            </li>
          </ul>
        </div>
      </Project>
    </div>
  )
}

export default HAN