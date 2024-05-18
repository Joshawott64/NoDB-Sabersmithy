import React from "react"

const ForgePommelList = ({setSaberPommel}) => {
    return (
        <ul className="pommels">
        <label htmlFor="pommels">Pommels:</label>
            <li>
                <img src="../src/assets/SaberParts/AhsokaPommel.png" alt="Ahsoka" onClick={() => setSaberPommel("../src/assets/SaberParts/AhsokaPommel.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/AnakinPommel.png" alt="Anakin" onClick={() => setSaberPommel("../src/assets/SaberParts/AnakinPommel.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/CalPommel.png" alt="Cal" onClick={() => setSaberPommel("../src/assets/SaberParts/CalPommel.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/DarkPommel.png" alt="Dark" onClick={() => setSaberPommel("../src/assets/SaberParts/DarkPommel.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/LukePommel.png" alt="Luke" onClick={() => setSaberPommel("../src/assets/SaberParts/LukePommel.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigPommel1.png" alt="Orig1" onClick={() => setSaberPommel("../src/assets/SaberParts/OrigPommel1.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigPommel2.png" alt="Orig2" onClick={() => setSaberPommel("../src/assets/SaberParts/OrigPommel2.png")}/>
            </li>
            <li>
                <img src="../src/assets/SaberParts/VaderPommel.png" alt="Vader" onClick={() => setSaberPommel("../src/assets/SaberParts/VaderPommel.png")}/>
            </li>
        </ul>
    )
}

export default ForgePommelList