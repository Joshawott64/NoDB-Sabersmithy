import React from "react"

const GalleryImage = ({emitter, guard, saberSwitch, pommel}) => {
    return (
        <td>
            <ul>
                <li id="saber-list">
                    <img src={emitter} alt="Emitter" />
                </li>
                <li id="saber-list">
                    <img src={guard} alt="Guard" />
                </li>
                <li id="saber-list">
                    <img src={saberSwitch} alt="Switch" />
                </li>
                <li id="saber-list">
                    <img src={pommel} alt="Pommel" />
                </li>
            </ul>
        </td>
    )
}

export default GalleryImage