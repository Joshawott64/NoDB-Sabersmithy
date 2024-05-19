import React from "react"

const GalleryColor = ({value}) => {
    return (
        <td>
            <img src={`../src/assets/Crystals/${value}Crystal.png`} alt={value} />
        </td>
    )
}

export default GalleryColor