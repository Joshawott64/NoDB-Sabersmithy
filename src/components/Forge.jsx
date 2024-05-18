import React from "react"
import { useState, useEffect } from 'react'
import axios from "axios"
import ForgeSaberPreview from "./ForgeSaberPreview"
import ForgeEmitterList from "./ForgeEmitterList"
import ForgeGuardList from "./ForgeGuardList"
import ForgeSwitchList from "./ForgeSwitchList"
import ForgePommelList from "./ForgePommelList"
import ForgeSaveButton from "./ForgeSaveButton"
import ForgeName from "./ForgeName"

const Forge = () => {

    // state values for saber components
    const [saberEmitter, setSaberEmitter] = useState('../src/assets/SaberParts/CalEmitter.png')
    const [saberGuard, setSaberGuard] = useState('../src/assets/SaberParts/CalGuard.png')
    const [saberSwitch, setSaberSwitch] = useState('../src/assets/SaberParts/CalSwitch.png')
    const [saberPommel, setSaberPommel] = useState('../src/assets/SaberParts/CalPommel.png')
    const [saberColor, setSaberColor] = useState('blue')
    const [saberName, setSaberName] = useState('')

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

    const newSaber = {
        name: saberName,
        color: saberColor,
        isDefault: false,
        emitter: saberEmitter,
        guard: saberGuard,
        switch: saberSwitch,
        pommel: saberPommel
    }

    const changeEmitter = (url) => {
        console.log('Emitter changed')
        
        setSaberEmitter(url)
    }

    const addSaber = () => {

        console.log('Saber saved')

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
                <ForgeEmitterList changeEmitter={changeEmitter}/>
                <ForgeGuardList />
                <ForgeSwitchList />
                <ForgePommelList />
            </div>
            <div>
                <p>Saber Preview</p>
            </div>
            <div>
                <form action="/forge">
                    <ForgeSaveButton addSaber={addSaber}/>
                    <ForgeName/>
                </form>
            </div>
        </>
    )
}

export default Forge