import React from 'react'
import './PhotoTwoOffsetLeft.css'

function PhotoTwoEven({photo1, photo2}) {
  return (
    <div className='row offset-left'>
        <div className='col col-lg-6 col-md-6 col-sm-12 col-12 gx-5 offset-left-photo photo-even'>
          <img src={photo1}></img>
        </div>
        <div className='col col-lg-6 col-md-6 col-sm-12 col-12 gx-5 offset-left-photo photo-even'>
          <img src={photo2}></img>
        </div>
    </div>
  )
}

export default PhotoTwoEven