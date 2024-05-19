import React from "react"

const GalleryEditButton = ({id, isDefault, name, color, emitter, guard, saberSwitch, pommel, setShowGallery, setShowForge, setShowEdit, setIdToEdit}) => {

    if (isDefault) {
        return (
            <td>
                <button disabled>Edit</button>
            </td>
        )
    } else {
        return (
            <td>
                <button onClick={() => {
                    setShowEdit(true)
                    setShowGallery(false)
                    setShowForge(false)
                    setIdToEdit(id)
                    }}>Edit</button>
            </td>
        )
    }
}
    
export default GalleryEditButton