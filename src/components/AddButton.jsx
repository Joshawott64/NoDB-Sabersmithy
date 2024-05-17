import React from "react"

const AddButton = ({addSaberRow}) => {
    
    return (
        <tr>
            <td>
                <button onClick={addSaberRow}>Add Saber</button>
            </td>
        </tr>
    )
}

export default AddButton