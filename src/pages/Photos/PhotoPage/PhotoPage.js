import React from 'react'
import { useFirestore } from '../../../hooks/useFirestore'
import './PhotoPage.css'

function PhotoPage({page}) {
    const { docs } = useFirestore(page); 
    console.log(docs)

    return (
        <div className='img-grid'>
            <div className='row'>
                { docs && docs.map(doc => (
                    <div className='col col-lg-4 col-4 img-wrap' key={ doc.id }>
                        <img src={doc.url} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoPage