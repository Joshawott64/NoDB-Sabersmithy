import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableHeader from './GalleryTableHeader'
import GalleryTableRow from './GalleryTableRow'
import fineAddition from "../assets/Audio/fine_addition.mp3"

const GalleryTable = ({setShowGallery, setShowForge, setShowEdit, setIdToEdit}) => {

    const [saberData, setSaberData] = useState([])

    useEffect(() => {
        console.log('Sabers Array:', saberData)

        axios.get('/gallery')
            .then((res) => {
                setSaberData(res.data)
            })
    }, [])

    const deleteSaberRow = async (id) => {
        console.log(`Id: '${id}' will make a fine addition to my collection, hahahahahaaa.`)

        const newSaberArray = await axios.delete(`/delete/${id}`)

        new Audio(fineAddition).play()

        setSaberData(newSaberArray.data)
    }

    const rows = saberData.map((el)  => <GalleryTableRow
        id={el.id}
        key={el.id}
        initialIsDefault={el.isDefault}
        initialName={el.name}
        initialColor={el.color}
        initialEmitter={el.emitter}
        initialGuard={el.guard}
        initialSwitch={el.switch}
        initialPommel={el.pommel}
        deleteSaberRow={() => deleteSaberRow(el.id)}
        setShowGallery={setShowGallery}
        setShowForge={setShowForge}
        setShowEdit={setShowEdit}
        setIdToEdit={setIdToEdit}
    />)

    return (
        <table>
            <thead>
                <GalleryTableHeader/>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default GalleryTable