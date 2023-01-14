import React from 'react'
import './PhotoTwoOffsetLeft.css'

function PhotoTwoOffsetLeft({photo1, photo2}) {
  return (
    <div className='row offset-left'>
        <div className='col col-lg-8 col-md-8 col-sm-8 col-8 gx-5 offset-left-photo photo-big'>
          <img src={photo1}></img>
        </div>
        <div className='col col-lg-4 col-md-4 col-sm-4 col-4 gx-5 offset-left-photo'>
          <img src={photo2}></img>
        </div>
    </div>
  )
}

export default PhotoTwoOffsetLeft