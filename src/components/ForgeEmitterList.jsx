import React from "react"

const ForgeEmitterList = ({setSaberEmitter}) => {

    return (
        <ul className='emitters'>
        <label htmlFor="emitters">Emitters:</label>
            <li>
                <img src="../src/assets/SaberParts/AhsokaEmitter.png" alt="Ahsoka" onClick={() => setSaberEmitter("../src/assets/SaberParts/AhsokaEmitter.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/AnakinEmitter.png" alt="Anakin" onClick={() => setSaberEmitter("../src/assets/SaberParts/AnakinEmitter.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/CalEmitter.png" alt="Cal" onClick={() => setSaberEmitter("../src/assets/SaberParts/CalEmitter.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/DarkEmitter.png" alt="Dark" onClick={() => setSaberEmitter("../src/assets/SaberParts/DarkEmitter.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/LukeEmitter.png" alt="Luke" onClick={() => setSaberEmitter("../src/assets/SaberParts/LukeEmitter.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigEmitter1.png" alt="Orig1" onClick={() => setSaberEmitter("../src/assets/SaberParts/OrigEmitter1.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigEmitter2.png" alt="Orig2" onClick={() => setSaberEmitter("../src/assets/SaberParts/OrigEmitter2.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/VaderEmitter.png" alt="Vader" onClick={() => setSaberEmitter("../src/assets/SaberParts/VaderEmitter.png")}/>
            </li>
        </ul>
    )
}

export default ForgeEmitterList