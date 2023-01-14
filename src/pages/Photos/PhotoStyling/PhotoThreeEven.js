import React from 'react'
import './PhotoThreeEven.css'

function PhotoThreeEven({photo1, photo2, photo3}) {
  return (
    <div className='row places-photos'>
        <div className='col col-lg-4 col-md-4 col-sm-6 col-6 gx-5 places-photo-3'>
          <img src={photo1}></img>
        </div>
        <div className='col col-lg-4 col-md-4 col-sm-6 col-6 gx-5 places-photo-3'>
          <img src={photo2}></img>
        </div>
        <div className='col col-lg-4 col-md-4 col-sm-12 col-12 gx-5 places-photo-3 last-photo'>
          <img src={photo3}></img>
        </div>
    </div>
  )
}

export default PhotoThreeEven; 