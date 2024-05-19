import { useState } from 'react'
import GalleryTable from './GalleryTable'

function Gallery ({setShowEdit, setShowGallery, setShowForge, setIdToEdit}) {

    return (
        <>
            <h1>Gallery</h1>
            <div>
                <GalleryTable setShowEdit={setShowEdit} setShowGallery={setShowGallery} setShowForge={setShowForge} setIdToEdit={setIdToEdit}/>
            </div>
        </>
    )
}

export default Gallery