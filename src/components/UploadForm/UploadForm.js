import ProgressBar from './ProgressBar';
import React, { useState } from 'react'
import './UploadForm.css'

const UploadForm = () => {
  const types = ['image/png', 'image/jpeg', 'image/jpg']; 

  const [file, setFile] = useState(null); 
  const [error, setError] = useState(null); 
  const [type, setType] = useState(null); 

  const changeHandler = (e) => {
    let selected = e.target.files[0]; 
    
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError(null); 
    }
    else {
      setFile(null); 
      setError("Please use a PNG, JPEG, or JPG"); 

    }
  }

  return (
    <form className='photo-form'>
        <h1 className='photo-upload-text'>Upload a photo</h1>
        <div>
          <label for='landscape-upload' className='custom-input-button'>Places</label>
          <input id='landscape-upload' className='input-button' type="file" multiple onChange={changeHandler} onClick={() => setType('Places')}/>
          <label for='portrait-upload' className='custom-input-button'>People</label>
          <input id='portrait-upload' className='input-button' type="file" multiple onChange={changeHandler} onClick={() => setType('Portraits')}/>
          <label for='concerts-upload' className='custom-input-button'>Concerts</label>
          <input id='concerts-upload' className='input-button' type="file" multiple onChange={changeHandler} onClick={() => setType('Concerts')}/>
          <label for='miscellaneous-upload' className='custom-input-button'>Miscellaneous</label>
          <input id='miscellaneous-upload' className='input-button' type="file" multiple onChange={changeHandler} onClick={() => setType('Miscellaneous')}/>
        </div>
        <div className='output'>
          {error && <div className='error'>{ error }</div>}
          {file && <div className='file'>{ file.name }</div>}
          {file && <ProgressBar file={file} setFile={setFile} type={type}/>}
        </div>
    </form>
  )
}

export default UploadForm