import React from "react"

const EditSaveButton = ({editSaber, setShowEdit}) => {

    const handleSave = () => {
        editSaber()
        setShowEdit(false)
    }

    return (
        <button onClick={handleSave}>Save</button>
    )
}

export default EditSaveButton