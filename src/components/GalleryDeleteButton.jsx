import React from "react"

const GalleryDeleteButton = ({isDefault, deleteSaberRow}) => {

    if (isDefault) {
        return (
            <td>
                <button disabled>Delete</button>
            </td>
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