import React from "react"

const ForgeGuardList = () => {
    return (
        <ul className="guards">
        <label htmlFor="guards">Guards:</label>
            <li>
                <img src="../src/assets/SaberParts/AhsokaGuard.png" alt="Ahsoka" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/AnakinGuard.png" alt="Anakin" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/CalGuard.png" alt="Cal" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/DarkGuard.png" alt="Dark" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/LukeGuard.png" alt="Luke" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigGuard1.png" alt="Orig1" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/OrigGuard2.png" alt="Orig2" />
            </li>
            <li>
                <img src="../src/assets/SaberParts/VaderGuard.png" alt="Vader" />
            </li>
        </ul>
    )
}

export default ForgeGuardList