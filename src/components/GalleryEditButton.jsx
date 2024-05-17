import React from "react"

const GalleryEditButton = ({isDefault}) => {
    if (isDefault) {
        return (
            <td></td>
        )
    } else {
        return (
            <td>
                <button>Edit</button>
            </td>
        )
    }
}
    
export default GalleryEditButton