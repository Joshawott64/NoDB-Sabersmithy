import React from "react"
import ForgeSaberPreview from "./ForgeSaberPreview"
import ForgeEmitterList from "./ForgeEmitterList"
import ForgeGuardList from "./ForgeGuardList"
import ForgeSwitchList from "./ForgeSwitchList"
import ForgePommelList from "./ForgePommelList"

const Forge = () => {
    
    return (
        <>
            <h1>Forge</h1>
            <div>
                <ForgeEmitterList />
                <ForgeGuardList />
                <ForgeSwitchList />
                <ForgePommelList />
            </div>
            <div>
                <p>Saber Preview</p>
            </div>
            <div>
                <p>Save Button</p>
                <p>Saber Name Form</p>
            </div>
        </>
    )
}

export default Forge