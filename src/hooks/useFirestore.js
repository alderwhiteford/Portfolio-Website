import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

// Takes in a collection reference that it will target. 
const useFirestore = (collection) => {

    // Prepare the document array variable. 
    const [docs, setDocs] = useState([]); 

    // If the collection changes...
    useEffect(() => {
        // On snapshot is fired everytime a change is made in the collection. The function takes in a snapshot object. This will
        // update the website in realtime as the database collection is altered. 
        projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []; 
                snap.forEach(doc => {
                    // ... parses the document data into its fields. 
                    documents.push({
                        ...doc.data(), id: doc.id
                    })
                    setDocs(documents); 
                })
            })
    }, [collection])

    return { docs }
}

export { useFirestore }