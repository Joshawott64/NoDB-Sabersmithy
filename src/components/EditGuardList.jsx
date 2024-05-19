import React from "react"

const EditGuardList = ({setSaberGuard}) => {

    return (
        <ul className='guards'>
        <label htmlFor="guards">Guards:</label>
            <li>
                <img src="../src/assets/SaberParts/AhsokaGuard.png" alt="Ahsoka" onClick={() => setSaberGuard("../src/assets/SaberParts/AhsokaGuard.png")}/>
                {/* <button >Pick me!</button> */}
            </li>
            <li>
                <img src="../src/assets/SaberParts/AnakinGuard.png" alt="Anakin" onClick={() => setSaberGuard("../src/assets/SaberParts/AnakinGuard.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/CalGuard.png" alt="Cal" onClick={() => setSaberGuard("../src/assets/SaberParts/CalGuard.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/DarkGuard.png" alt="Dark" onClick={() => setSaberGuard("../src/assets/SaberParts/DarkGuard.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/LukeGuard.png" alt="Luke" onClick={() => setSaberGuard("../src/assets/SaberParts/LukeGuard.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigGuard1.png" alt="Orig1" onClick={() => setSaberGuard("../src/assets/SaberParts/OrigGuard1.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigGuard2.png" alt="Orig2" onClick={() => setSaberGuard("../src/assets/SaberParts/OrigGuard2.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/VaderGuard.png" alt="Vader" onClick={() => setSaberGuard("../src/assets/SaberParts/VaderGuard.png")}/>
            </li>
        </ul>
    )
}

export default EditGuardList