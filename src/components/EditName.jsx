import React from "react"

const EditName = ({value, setSaberName, saberName}) => {
    return (
        <input type="text" value={saberName} onChange={(e) => setSaberName(e.target.value)}/>
    )
}

export default EditName