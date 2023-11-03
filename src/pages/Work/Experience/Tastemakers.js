import React from 'react'
import Project from '../../../components/Project/Project'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader'
import Skill from '../../../components/Skill/Skill'
import PhotoThreeEven from '../../Photos/PhotoStyling/PhotoThreeEven'
import PhotoTwoOffsetRight from '../../Photos/PhotoStyling/PhotoTwoOffsetRight'
import PhotoTwoOffsetLeft from '../../Photos/PhotoStyling/PhotoTwoOffsetLeft'

function Tastemakers() {
  return (
    <div>
      <WorkExpHeader logo={'https://i.imgur.com/A990JUa.png'} background={'https://i.imgur.com/lJYP7kn.png'} position={"Concert\nPhotographer"} dates={"Sep. 2022 - Present"} description={'Tastemakers Magazine exists to give Northeastern students a voice in the music industry and help members develop their craft. As a concert photographer, I am responsible for capturing and editing photos of artists at local venues for social media, the website, and magazine publication. All images are taken using a Sony A7iii.'} website='https://www.tastemakersmag.com/'/>
      <Project title={'Recent Concert Photos (2023)'}/>
      <PhotoThreeEven 
        photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC03747.JPG?alt=media&token=77e3dd1e-7221-417b-8734-8257935b6e99' 
        photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC09763.JPG?alt=media&token=2bc1cda4-640b-4801-9d08-d0bdd06be715'
        photo3='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC09478.JPG?alt=media&token=df859251-e32d-4483-a31b-f671cb46c180'
      />
      <PhotoTwoOffsetLeft
        photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_All_Time_Low_MGM_print2.JPG?alt=media&token=a7f7e46f-43ef-4b22-aa5c-97a57dc408a1'
        photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC02912-Enhanced-NR-3.JPG?alt=media&token=e7b0116f-ce01-4675-8c9c-9404ced285a4'
      />
      <PhotoTwoOffsetRight
        photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_Spence_Sutherland_Brighton_4web.jpg?alt=media&token=ffc2a488-bb40-4f17-b04c-94d9c7500eba' 
        photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/DSC07122.JPG?alt=media&token=499b80f1-4d6c-4e9e-bfa4-29220455d2de'
      />
      <PhotoTwoOffsetLeft
        photo1='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_StephenSanchez_Brighton_8web.jpg?alt=media&token=7bc33c73-a969-4a74-9d67-cbda8579e56c'
        photo2='https://firebasestorage.googleapis.com/v0/b/portfolio-website-561af.appspot.com/o/AlderWhiteford(Computer_Science_%26_Finance)_QuartersOfChangeWeb1.jpg?alt=media&token=ae0e89e8-afcb-4cfb-b889-23d4693f603c'
      />
    </div>
  )
}

export default Tastemakers