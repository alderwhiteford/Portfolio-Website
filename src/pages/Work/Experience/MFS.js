import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import Skill from '../../../components/Skill/Skill'

function MFS() {
  return (
    <div>
       <WorkExpHeader logo={'https://i.imgur.com/u17e8mn.png'} background={'https://i.imgur.com/EGHxpXz.jpeg'} position={"Digital\n Developer\n Co-op"} dates={"Jul. 2022 - Dec. 2022"} description={'During my time as a co-op at MFS, I worked alongside a tight knit group of developers, business analysts, and QA engineers to assist in the enhancement of the company’s client facing web-app and help lead the integration of Azure into the existing tech stack. Through my projects I supported the work of senior management and collaborated with product owners to develop strategic solutions to address internal business needs.'} website='https://www.mfs.com/corporate/en/home.html'/>
       <Skill skills={[{"color": '#ffb3ba', "title": "Java"}, {"color": '#ffdfba', "title": "Powershell"}, {"color": '#bae1ff', "title": "Azure"}, {"color": "#baffc9", "title": "SQL"}, {"color":"#ffffba", "title": "Python"}, {"color":"#DEE3FF", "title":"REST APIs"}]}></Skill>
       <Project title="Improve Load Time of www.meridian.mfs.com">
        <div>
          The goal of this project was to improve the un-cached load time of MFS’ Meridian funds website, www.meridian.mfs.com. A successful decrease would enhance user experience for international customers.
          <br/>
          <br/>
          I began by identifying the back-end services that are responsible for data retrieval and presentation which included both the web-app code and SQL database. A/B testing was then completed to locate individual queries and methods that the page relied upon to source information. In the case of the meridian page, this primarily included the equals and hash code methods and stored procedures.
          <br/>
          <br/>
          Development included overhauling both of the aforementioned methods to remove un-needed comparators and data-type catalyzed inefficiencies. The queries were also restructured and indexes were applied to various tables to increase the speed of data look-ups. All database and query changes were tested using Oracle’s query timer and the overall load time was measured in Postman. To ensure testing was accurate, all console print statements were removed, the cache was cleared, and the local system was given sufficient time to boot-up.
          <br/>
          <br/>
          The implemented changes led to a 10% increase in the un-cached load time of www.meridian.mfs.com.
        </div>
       </Project>
       <Project title="Azure Integration and Data Pipeline Development">
        <div>
          During the latter half of my co-op I had the privilege of playing an integral role in the adoption of Microsoft’s Azure into the company’s tech stack. The goal was to identify, implement, and document industry standard practices that would help promote congruency amongst future DevOps projects. With the bulk of my work revolving around the Data Factory module, I was focused on tackling pipeline abstraction, error handling, business report automation, API integrations, and the transformation of dynamic JSON data into concrete database views.
          <br/>
          <br/>
          Over the course of this project I…
          <br/>
          <ul>
            <li>
              developed, and consulted on, MFS’ first production-ready data pipelines for CVent and Seismic, un-siloing 100% of company data across these platforms.
            </li>
            <li>
              spearheaded the approval of the Logic App module for error handling to increase the visibility of pipeline failures.
            </li>
            <li>
              researched and documented the efficacy of function apps for in-pipeline scripting to be used for business report automation.
            </li>
            <li>
              abstracted all common workflows such as error-handling and Adobe Experience Manager data transfers into modularized, drag-and-drop components.
            </li>
            <li>
              designed and implemented a data pipeline to confirm file and meta-data transfers between Adobe Experience Manager and Seismic, improving the performance of a pre-existing business report by 99%.
            </li>
            <li>
              wrote 20+ pages of documentation on Azure Data Factory and other in-platform resources to be used as reference by future developers.
            </li>
          </ul>
        </div>
       </Project>
       <Project title="Other Responsibilities">
        <div>
          <ul>
            <li>
              Completed weekly scrum tickets for backend bug fixes and automation testing
            </li>
            <li>
              Worked to identify the source of errors in 50+ automation tests for the MFS client website and correct them as needed.
            </li>
            <li>
              Completed two, monthly internal business reports for upper management to analyze team efficiency
            </li>
          </ul>
        </div>
       </Project>
    </div>
   
  )
}

export default MFS