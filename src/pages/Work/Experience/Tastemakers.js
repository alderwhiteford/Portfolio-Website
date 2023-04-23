import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import Skill from '../../../components/Skill/Skill'
import PhotoThreeEven from '../../Photos/PhotoStyling/PhotoThreeEven'
import PhotoTwoOffsetRight from '../../Photos/PhotoStyling/PhotoTwoOffsetRight'

function Tastemakers() {
  return (
    <div>
        <WorkExpHeader logo={'https://i.imgur.com/A990JUa.png'} background={'https://i.imgur.com/lJYP7kn.png'} position={"Concert\nPhotographer"} dates={"Sep. 2022 - Present"} description={'Tastemakers Magazine exists to give Northeastern students a voice in the music industry and help members develop their craft. As a concert photographer, I am responsible for capturing and editing photos of artists at local venues for social media, the website, and magazine publication. All images are taken using a Sony A7iii.'} website='https://www.tastemakersmag.com/'/>
        <Project title={'Most Recent Concert - Spencer Sutherland 4/15/23 @ Brighton Music Hall'}/>
        <PhotoThreeEven photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_4web.jpg?alt=media&token=ffc2a488-bb40-4f17-b04c-94d9c7500eba' photo2={'https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_5web.jpg?alt=media&token=e2ee62bf-7a06-48ab-ac06-3f67ba99b95d'} photo3={'https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_10web.jpg?alt=media&token=9e154dcd-8064-4e58-8db8-7247ec3bda4e'}></PhotoThreeEven>
        <PhotoTwoOffsetRight photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_18web.jpg?alt=media&token=2faf01cd-858b-4017-bc4f-4e1d08a7289b' photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_7web.jpg?alt=media&token=1de23899-dbf8-4c8f-857a-302ee7b0bc6f'/>
    </div>
  )
}

export default Tastemakers