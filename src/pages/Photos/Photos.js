import React from 'react'
import './Photos.css'
import {NavLink} from 'react-router-dom';

function Photos() {
  return (
    <div className="container-fluid">
      <div className='row photos-row'>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-12 gx-3 photos-col'>
            <NavLink to='/Portfolio-Website/photos/places' className='photo-link'>
              <div className='photo-category places'>
                <h1>Places</h1>
              </div>
            </NavLink>
            <img src='https://i.imgur.com/UVxb87V.jpg'/>
            <div className='photo-col-cover'></div>
        </div>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-12 gx-3 photos-col'>
          <NavLink to='/Portfolio-Website/photos/people' className='photo-link'>
            <div className='photo-category people'>
              <h1>People</h1>
            </div>
          </NavLink>
          <img src='https://i.imgur.com/lMx0lJm.jpg'/>
            <div className='photo-col-cover'></div>
        </div>
      </div>
      <div className='row photos-row'>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-12 gx-3 photos-col'>
          <NavLink to='/Portfolio-Website/photos/concerts' className='photo-link'>
            <div className='photo-category concerts'>
              <h1>Concerts</h1>
            </div>
          </NavLink>
          <img src='https://i.imgur.com/jW1HHXi.jpg'/>
          <div className='photo-col-cover'></div>
        </div>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-12 gx-3 photos-col'>
          <NavLink to='/Portfolio-Website/photos/miscellaneous' className='photo-link'>
            <div className='photo-category miscellaneous'>
              <h1>Miscellaneous</h1>
            </div>
          </NavLink>
          <img src='https://i.imgur.com/esXebHu.jpg'/>
          <div className='photo-col-cover'></div>
        </div>
      </div>
    </div>
  )
}

export default Photos