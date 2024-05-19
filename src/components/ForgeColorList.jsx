import React from "react"

const ForgeColorList = ({setSaberColor}) => {

    return (
        <ul className="colors">
            <label htmlFor="colors">Colors:</label>
            <li>
                <img src="../src/assets/Crystals/BlackCrystal.png" alt="Black" onClick={() => setSaberColor("Black")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/BlueCrystal.png" alt="Blue" onClick={() => setSaberColor("Blue")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/GreenCrystal.png" alt="Green" onClick={() => setSaberColor("Green")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/OrangeCrystal.png" alt="Orange" onClick={() => setSaberColor("Orange")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/PurpleCrystal.png" alt="Purple" onClick={() => setSaberColor("Purple")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/RedCrystal.png" alt="Red" onClick={() => setSaberColor("Red")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/SilverCrystal.png" alt="Silver" onClick={() => setSaberColor("Silver")}/>
            </li>
            <li>
                <img src="../src/assets/Crystals/YellowCrystal.png" alt="Yellow" onClick={() => setSaberColor("Yellow")}/>
            </li>
        </ul>
    )
}

export default ForgeColorList