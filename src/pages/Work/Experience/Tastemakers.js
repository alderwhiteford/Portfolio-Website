import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import Skill from '../../../components/Skill/Skill'
import PhotoThreeEven from '../../Photos/PhotoStyling/PhotoThreeEven'
import PhotoTwoOffsetRight from '../../Photos/PhotoStyling/PhotoTwoOffsetRight'

function Tastemakers() {
  return (
    <div>
        <WorkExpHeader logo={'https://i.imgur.com/A990JUa.png'} background={'https://i.imgur.com/lJYP7kn.png'} position={"Concert\nPhotographer"} dates={"Jul. 2022 - Dec. 2022"} description={'Tastemakers Magazine exists to give Northeastern students a voice in the music industry and help members develop their craft. As a concert photographer, I am responsible for capturing and editing photos of artists at local venues for social media, the website, and magazine publication. All images are taken using a Sony A7iii.'} website='https://www.tastemakersmag.com/'/>
        <Project title={'Most Recent Concert - Steven Sanchez 2/17/23 @ Brighton Music Hall'}/>
        <PhotoThreeEven photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC00116-3%20copy.jpg?alt=media&token=7b3a35c5-15b3-4995-865e-c269aa3f84ad' photo2={'https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC00344%20copy.jpg?alt=media&token=5513ced8-6358-49dc-8677-3e2331773101'} photo3={'https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC09818-2%20copy.jpg?alt=media&token=59fbe3e0-ec6c-41fa-93ff-2ded25f66f72'}></PhotoThreeEven>
        <PhotoTwoOffsetRight photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC00166-3%20copy.jpg?alt=media&token=8f921a19-c9af-404f-bb37-1855735f748b' photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC01214%20copy.jpg?alt=media&token=536ee9bb-79a1-4c4d-b781-7228a0e8213c'/>
        <Project title={'Tentative Next Up: Quarters of Change 2/24/23 @ Brighton Music Hall'}/>
    </div>
  )
}

export default Tastemakers