import React from "react"

const EditSaberPreview = ({saberEmitter, saberGuard, saberSwitch, saberPommel}) => {
    return (
        <ul>
            <li>
                <img src={saberEmitter} alt="Emitter" />
            </li>
            <li>
                <img src={saberGuard} alt="Guard" />
            </li>
            <li>
                <img src={saberSwitch} alt="Switch" />
            </li>
            <li>
                <img src={saberPommel} alt="Pommel" />
            </li>
        </ul>
    )
}

export default EditSaberPreview