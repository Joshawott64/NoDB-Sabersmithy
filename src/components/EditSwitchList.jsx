import React from "react"

const EditSwitchList = ({setSaberSwitch}) => {

    return (
        <ul className='switches'>
        <label htmlFor="switches">Switchs:</label>
            <li>
                <img src="../src/assets/SaberParts/AhsokaSwitch.png" alt="Ahsoka" onClick={() => setSaberSwitch("../src/assets/SaberParts/AhsokaSwitch.png")}/>
                {/* <button >Pick me!</button> */}
            </li>
            <li>
                <img src="../src/assets/SaberParts/AnakinSwitch.png" alt="Anakin" onClick={() => setSaberSwitch("../src/assets/SaberParts/AnakinSwitch.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/CalSwitch.png" alt="Cal" onClick={() => setSaberSwitch("../src/assets/SaberParts/CalSwitch.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/DarkSwitch.png" alt="Dark" onClick={() => setSaberSwitch("../src/assets/SaberParts/DarkSwitch.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/LukeSwitch.png" alt="Luke" onClick={() => setSaberSwitch("../src/assets/SaberParts/LukeSwitch.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigSwitch1.png" alt="Orig1" onClick={() => setSaberSwitch("../src/assets/SaberParts/OrigSwitch1.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigSwitch2.png" alt="Orig2" onClick={() => setSaberSwitch("../src/assets/SaberParts/OrigSwitch2.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/VaderSwitch.png" alt="Vader" onClick={() => setSaberSwitch("../src/assets/SaberParts/VaderSwitch.png")}/>
            </li>
        </ul>
    )
}

export default EditSwitchList