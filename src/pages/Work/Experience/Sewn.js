import React from 'react'
import WorkExpHeader from '../../../components/WorkExperience/WorkExpHeader';
import Section from '../../../components/Section/Section';

function Sewn() {
  return (
    <div>
      <WorkExpHeader 
        logo={'https://i.imgur.com/fVGgwei.png'}
        background={'https://i.imgur.com/wnomP3A.png'}
        position={"Co-Founder"}
        dates={"Jan. 2022 - Oct. 2022"}
        description={'SEWN Boutique was a passion project that was born out my love for the world of small fashion. The goal was to develop an ecommerce platform that harnessed the power of story-telling to offer up-and-coming designers the opportunity to present and sell their work in front of a diverse audience of niche, clothing consumers. Although school conflicts eventually brought upon the termination of the venture, it was an incredible experience that taught me client relationship management, web development, and the complexities that come with being an entreprenuer.'}
      />
      <Section />
    </div>
  )
}

export default Sewn;