import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import ItemDropDown from '../../../components/ItemDropDown/ItemDropDown'
import './Experience.css'


function Delt() {
  return (
    <div>
      <WorkExpHeader logo={'https://i.imgur.com/wMHQgj4.png'}
                     background={'https://i.imgur.com/B0saNjj.png'}
                     position={"Public\nRelations\nChairman"} 
                     dates={"May. 2022 - Dec. 2022"} 
                     description={'I had the privilege serving as the Public Relations Chairman of the Delta Tau Delta fraternity for the 2022 Summer/Fall semester. My role centered around helping grow and maintain the chapter’s social media, managing communication with other university organizations, and leading the design efforts for our Fall rush theme.'} 
                     website='https://www.instagram.com/deltnu/?hl=en'/>
      
      <Project title="Fall 2022 Rush Theme" description=''/>
      <div className='rush-possible-themes'>
        <ItemDropDown title={"Formula 1"} 
                      colors={["#1f2464", "#6bc5dd", "#f4e5c8"]} 
                      description={"The tee is inspired by vintage advertisement for the Monaco Grand Prix. It features a large, racecar back graphic and a pocket logo of the Delta Tau Delta letters meshed with the Monaco city-scape."} 
                      images={['https://i.imgur.com/tI4KP53.jpg', 'https://i.imgur.com/zbbmay4.jpg']}/>
        <ItemDropDown title={"Renaissance"} 
                      colors={["#8d8b85", "#b1ada9", "#f0e9dd"]} 
                      description={"The design aimed to imitate the frescoes and corinithian columns that were staples of Renaissance architecture and design. I chose to use more muted colors to reflect the age of the period of the tee depicts."} 
                      images={['https://i.imgur.com/YzBk1MM.png', 'https://i.imgur.com/qweB6g3.png']}/>
        <ItemDropDown title={"Travis Scott"} 
                      colors={["#633f1c", "#a77d55", "#a28565"]} 
                      description={"The tee features renditions of the iconic Cactus Jack logo and a back graphic inspired by Travis Scott’s short-lived seltzer brand, Cacti."} 
                      images={['https://i.imgur.com/EmOZcr6.png', 'https://i.imgur.com/jBJRyiL.png']}/>
      </div>
      <Project title="Final Design" 
               description='After lots of deliberation amongst the chapter, we decided to go forward with the Formula 1 theme paired with an updated color pallette. Finalized marketing material for our instagram and in-person tabling was then prepared. I chose to use a vibrant orange as our primary color in the hopes that it would stand to PNM’s (Possible New Members) in comparison to other fraternity’s designs.'/>
      
      <div className='delt-images' style={{paddingTop: 20}}>
        <img className='design-image' src='https://i.imgur.com/HldG38h.png'/>
        <img className='design-image' src='https://i.imgur.com/18wCHUr.png'/>
        <img className='design-image' src='https://i.imgur.com/ZkQqz0R.png'/>
      </div>
      <div className='delt-images'>
        <img className='design-image' src='https://i.imgur.com/GeG5WNt.png'/>
        <img className='design-image' src='https://i.imgur.com/0j6m2zS.png'/>
        <img className='design-image' src='https://i.imgur.com/7eIDstv.png'/>
        <img className='design-image' src='https://i.imgur.com/qwHbhz8.png'/>
        <img className='design-image' src='https://i.imgur.com/0m1bxMG.png'/>
      </div>
      <div className='delt-images'>
        <img className='design-image-large' src='https://i.imgur.com/DBygXcw.png'/>
        <img className='design-image-large' src='https://i.imgur.com/gsmWKv6.png'/>
      </div>
    </div>
  )
}

export default Delt