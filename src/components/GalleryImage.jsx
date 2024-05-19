import React from "react"

const GalleryImage = ({emitter, guard, saberSwitch, pommel}) => {
    return (
        <td>
            <div id="saber-preview">
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
            </div>
        </td>
    )
}

export default GalleryImage