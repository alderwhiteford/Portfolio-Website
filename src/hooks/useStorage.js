import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'

const useStorage = (file, type) => {
    const [progress, setProgress] = useState(null); 
    const [error, setError] = useState(null); 
    const [url, setUrl] = useState(null); 


    // The file at the bottom is the useEffect dependency. Whenever the file changes, this function will be ran. 
    useEffect(() => {
        // Creating a reference to the file in the default storage booking. It doesn't exist yet, but when it is uploaded it will be inserted at this location. 
        const storageRef = projectStorage.ref(file.name); 
        const collectionRef = projectFirestore.collection(type);

        // Upload the file to the reference and watch the progress. It comes with a snapshot of the file. 
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; 
            setProgress(percentage); 
        }, (err) => {
            setError(err); 
        }, async () => {
            const url = await storageRef.getDownloadURL(); 
            setUrl(url); 
            const createdAt = timeStamp(); 
            collectionRef.add({ url, createdAt })
        }); 
    }, [file])

    return  { progress, error, url }
}

export default useStorage;