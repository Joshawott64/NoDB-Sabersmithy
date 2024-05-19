import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import EditSaberPreview from "./EditSaberPreview"
import EditEmitterList from "./EditEmitterList"
import EditGuardList from "./EditGuardList"
import EditSwitchList from "./EditSwitchList"
import EditPommelList from "./EditPommelList"
import EditColorList from "./EditColorList"
import EditSaveButton from "./EditSaveButton"
import EditName from "./EditName"

const Edit = ({idToEdit, setShowEdit}) => {

    console.log('idToEdit:', idToEdit)

    // state values for saber components
    const [saberEmitter, setSaberEmitter] = useState('')
    const [saberGuard, setSaberGuard] = useState('')
    const [saberSwitch, setSaberSwitch] = useState('')
    const [saberPommel, setSaberPommel] = useState('')
    const [saberColor, setSaberColor] = useState('')
    const [saberName, setSaberName] = useState('')

    const tempSaber = {
        id: idToEdit,
        isDefault: false,
        name: saberName,
        color: saberColor,
        emitter: saberEmitter,
        guard: saberGuard,
        switch: saberSwitch,
        pommel: saberPommel
    }

    console.log('tempSaber', tempSaber)

    useEffect(() => {
        console.log('Time to edit your saber!')

        axios.get(`/edit/${idToEdit}`)
            .then((res) => {
                console.log('saber.data:', res.data)
    
                setSaberEmitter(res.data.emitter)
                setSaberGuard(res.data.guard)
                setSaberSwitch(res.data.switch)
                setSaberPommel(res.data.pommel)
                setSaberColor(res.data.color)
                setSaberName(res.data.name)
            }
        )
    }, [])

    
    const editSaber = (id, body) => {

        console.log('Saving changes...')

        axios.put(`/edit/${id}`, body)
            .then((res) => {
                
                console.log('Changes saved')
            })

    }

    return (
        <>
            <h1>Edit Saber</h1>
            <EditEmitterList setSaberEmitter={setSaberEmitter}/>
            <EditGuardList setSaberGuard={setSaberGuard}/>
            <EditSwitchList setSaberSwitch={setSaberSwitch}/>
            <EditPommelList setSaberPommel={setSaberPommel}/>
            <EditColorList setSaberColor={setSaberColor}/>
            <EditSaberPreview 
                saberEmitter={saberEmitter}
                saberGuard={saberGuard}
                saberSwitch={saberSwitch}
                saberPommel={saberPommel}
            />
            <EditName saberName={saberName} setSaberName={setSaberName}/>
            <EditSaveButton editSaber={() => editSaber(idToEdit, tempSaber)} setShowEdit={setShowEdit}/>
        </>
    )
}

export default Edit