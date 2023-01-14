import React from 'react'
import './Photos.css'
import {NavLink} from 'react-router-dom';

function Photos() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col col-lg-6 col-md-6 col-sm-6 col-12 gx-3 photos-col'>
          <NavLink to='/photos/places' className='photo-link'>
            <div className='photo-category places'>
              Places
            </div>
          </NavLink>
        </div>
        <div className='col col-lg-6 col-md-6 col-sm-6 col-12 gx-3 photos-col'>
          <NavLink to='/photos/people' className='photo-link'>
            <div className='photo-category people'>
              People
            </div>
          </NavLink>
        </div>
      </div>
      <div className='row'>
        <div className='col col-lg-6 col-md-6 col-sm-6 col-12 gx-3 photos-col'>
          <NavLink to='/photos/concerts' className='photo-link'>
            <div className='photo-category concerts'>
              Concerts
            </div>
          </NavLink>
        </div>
        <div className='col col-lg-6 col-md-6 col-sm-6 col-12 gx-3 photos-col'>
          <NavLink to='/photos/miscellaneous' className='photo-link'>
            <div className='photo-category miscellaneous'>
              Miscellaneous
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Photos