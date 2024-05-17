import React from "react"

const GalleryDeleteButton = ({isDefault, deleteSaberRow}) => {

    if (isDefault) {
        return (
            <td></td>
        )
    } else {
        return (
            <td>
                <button onClick={deleteSaberRow}>Delete</button>
            </td>
        )
    }
}

export default GalleryDeleteButton