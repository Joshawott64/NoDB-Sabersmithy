import React from "react"

const ForgeName = ({value, setSaberName}) => {
    return (
        <input type="text" value={value} onChange={(e) => setSaberName(e.target.value)}/>
    )
}

export default ForgeName