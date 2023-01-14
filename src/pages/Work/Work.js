import React from 'react'
import './Work.css'
import Header from '../../components/ItemHeader/Header.js'
import Footer from '../../components/Footer/Footer'

function Work() {
  return (
    <div className="container-fluid my-work">
      <div className="row first-work">
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/u17e8mn.png'} background={'https://i.imgur.com/EGHxpXz.jpeg'} position={"Digital Developer Co-op"} dates={"Jul. 2022 - Dec. 2022"} route={"/about"}/>
        </div>
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/rOFQAMh.png'} background={'https://i.imgur.com/fCbFz8N.png'} position={"Junior Associate"} dates={"Jan. 2022 - Present"} route={"/about"}/>
        </div>
      </div>
      <div className="row first-work">
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/A990JUa.png'} background={'https://i.imgur.com/ytJ4gOE.jpg'} position={"Photographer"} dates={"Sep. 2022 - Present"} route={"/about"}/>
        </div>
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/wMHQgj4.png'} background={'https://i.imgur.com/HqGsEsr.png'} position={"Public Relations Chair"} dates={"May 2022 - Present"} route={"/about"}/>
        </div>
      </div>
      <div className="row first-work">
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/fVGgwei.png'} background={'https://i.imgur.com/wnomP3A.png'} position={"Co-Founder"} dates={"Jan. 2022 - Oct. 2022"} route={"/about"}/>
        </div>
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/pMfjoCq.png'} background={'https://i.imgur.com/2EoWXS3.jpg'} position={"Peer Tutor"} dates={"Jan. 2022 - May. 2022"} route={"/about"}/>
        </div>
      </div>
      <div className="row first-work">
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/AMxtxvn.png'} background={'https://i.imgur.com/mJHzg2P.png'} position={"Co-Founder"} dates={"Jan. 2020 - Nov. 2021"} route={"/about"}/>
        </div>
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/8Owj29b.png'} background={'https://i.imgur.com/f9a5O4o.jpg'} position={"Founder"} dates={"Nov. 2017 - Nov. 2022"} route={"/about"}/>
        </div>
      </div>
      <div className="row first-work">
        <div className="col col-lg-6 col-md-12 gx-0 work-col">
          <Header logo={'https://i.imgur.com/SRThYBo.png'} background={'https://i.imgur.com/DOPQtK6.jpg'} position={"Summer Intern"} dates={"Jul. 2021 - Sept. 2021"} route={"/about"}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Work