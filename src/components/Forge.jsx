import React from "react"
import { useState, useEffect } from 'react'
import axios from "axios"
import ForgeSaberPreview from "./ForgeSaberPreview"
import ForgeEmitterList from "./ForgeEmitterList"
import ForgeGuardList from "./ForgeGuardList"
import ForgeSwitchList from "./ForgeSwitchList"
import ForgePommelList from "./ForgePommelList"
import ForgeColorList from "./ForgeColorList"
import ForgeSaveButton from "./ForgeSaveButton"
import ForgeName from "./ForgeName"

const Forge = () => {

    // state values for saber components
    const [saberEmitter, setSaberEmitter] = useState('../src/assets/SaberParts/CalEmitter.png')
    const [saberGuard, setSaberGuard] = useState('../src/assets/SaberParts/CalGuard.png')
    const [saberSwitch, setSaberSwitch] = useState('../src/assets/SaberParts/CalSwitch.png')
    const [saberPommel, setSaberPommel] = useState('../src/assets/SaberParts/CalPommel.png')
    const [saberColor, setSaberColor] = useState('Blue')
    const [saberName, setSaberName] = useState('Unnamed Saber')

    // useEffect(() => {
    //     console.log('Emitter:', saberEmitter)

    //     axios.post('/forge')
    //         .then((res) => {
    //             setSaberEmitter(res.data)
    //             setSaberGuard(res.data)
    //             setSaberSwitch(res.data)
    //             setSaberPommel(res.data)
    //             setSaberColor(res.data)
    //             setSaberName(res.data)
    //         })
    // }, [])

    // const changeEmitter = async (emitter) => {
    //     console.log('Emitter changed')
    //     console.log('emitter:', emitter)

    //     const newEmitter = await axios.put(`/forge/emitter`)

    //     console.log('newEmitter:', newEmitter)

    //     setSaberEmitter(emitter)
    // }

    const addSaber = () => {

        console.log('Saber saved')

        const newSaber = {
            id: null,
            isDefault: false,
            name: saberName,
            color: saberColor,
            emitter: saberEmitter,
            guard: saberGuard,
            switch: saberSwitch,
            pommel: saberPommel
        }

        axios.post('/forge', newSaber)
            .then((res) => {
                setSaberEmitter(res.data)
                setSaberGuard(res.data)
                setSaberSwitch(res.data)
                setSaberPommel(res.data)
                setSaberColor(res.data)
                setSaberName(res.data)
            })
    }

    return (
        <>
            <h1>Forge</h1>
            <div>
                <ForgeEmitterList setSaberEmitter={setSaberEmitter}/>
                <ForgeGuardList setSaberGuard={setSaberGuard}/>
                <ForgeSwitchList setSaberSwitch={setSaberSwitch}/>
                <ForgePommelList setSaberPommel={setSaberPommel}/>
                <ForgeColorList setSaberColor={setSaberColor}/>
            </div>
            <div>
                <ForgeSaberPreview 
                    saberEmitter={saberEmitter}
                    saberGuard={saberGuard}
                    saberSwitch={saberSwitch}
                    saberPommel={saberPommel}
                />
            </div>
            <div>
                <form action="/forge">
                    <ForgeSaveButton addSaber={addSaber}/>
                    <ForgeName setSaberName={setSaberName}/>
                </form>
            </div>
        </>
    )
}

export default Forge