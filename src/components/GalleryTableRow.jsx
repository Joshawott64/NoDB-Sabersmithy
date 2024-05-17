import React from "react"
import { useState } from 'react'
import GalleryImage from "./GalleryImage"
import GalleryDeleteButton from "./GalleryDeleteButton"
import GalleryEditButton from "./GalleryEditButton"
import GalleryName from "./GalleryName"
import GalleryColor from "./GalleryColor"

const GalleryTableRow = ({initialIsDefault, initialName, initialColor, initialEmitter, initialGuard, initialSwitch, initialPommel, id, addSaberRow, deleteSaberRow, editSaberRow}) => {

    const [isDefault, setIsDefault] = useState(initialIsDefault)
    const [name, setName] = useState(initialName)
    const [color, setColor] = useState(initialColor)
    const [emitter, setEmitter] = useState(initialEmitter)
    const [guard, setGuard] = useState(initialGuard)
    const [saberSwitch, setSaberSwitch] = useState(initialSwitch)
    const [pommel, setPommel] = useState(initialPommel)

    return (
        <tr>
            <GalleryName value={name}/>
            <GalleryColor value={color}/>
            <GalleryImage emitter={emitter} guard={guard} saberSwitch={saberSwitch} pommel={pommel}/>
            <GalleryEditButton isDefault={isDefault}/>
            <GalleryDeleteButton deleteSaberRow={deleteSaberRow} isDefault={isDefault}/>
        </tr>
    )
}

export default GalleryTableRow