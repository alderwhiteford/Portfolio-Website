import React from 'react'
import { useEffect } from 'react'
import useStorage from '../../hooks/useStorage'
import './ProgressBar.css'

const ProgressBar = ({file, setFile, type}) => {

    const {progress, url} = useStorage(file, type); 

    return (
        <div className='progress-bar-outer'>
            <div className='progress-bar' style={{width: progress + '%'}}></div>
            <div>{progress + '%'}</div>
            {url && <img className='progress-image' src={url}/>}
        </div>
  )
}

export default ProgressBar