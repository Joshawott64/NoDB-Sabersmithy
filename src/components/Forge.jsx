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
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ForgeEmitterList setSaberEmitter={setSaberEmitter}/>
                            </td>
                            <td>
                                <ForgeGuardList setSaberGuard={setSaberGuard}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ForgeSwitchList setSaberSwitch={setSaberSwitch}/>
                            </td>
                            <td>
                                <ForgePommelList setSaberPommel={setSaberPommel}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ForgeColorList setSaberColor={setSaberColor}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="saber-preview">
                <ForgeSaberPreview 
                    saberEmitter={saberEmitter}
                    saberGuard={saberGuard}
                    saberSwitch={saberSwitch}
                    saberPommel={saberPommel}
                />
            </div>
            <div>
                <form id="save-form" name="save" action="/forge">
                    <ForgeSaveButton addSaber={addSaber}/>
                    <ForgeName setSaberName={setSaberName}/>
                </form>
            </div>
        </>
    )
}

export default Forge