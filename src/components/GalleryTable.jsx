import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableHeader from './GalleryTableHeader'
import GalleryTableRow from './GalleryTableRow'
import AddButton from './AddButton'

const GalleryTable = () => {

    const [saberData, setSaberData] = useState([])

    useEffect(() => {
        console.log('Sabers Array:', saberData)

        axios.get('/gallery')
            .then((res) => {
                setSaberData(res.data)
            })
    }, [])

    const addSaberRow = () => {

        const newSaber = {
            name: 'Unnamed Saber',
            color: 'blue',
            isDefault: false,
            emitter: '../src/assets/SaberParts/CalEmitter.png',
            guard: '../src/assets/SaberParts/CalGuard.png',
            switch: '../src/assets/SaberParts/CalSwitch.png',
            pommel: '../src/assets/SaberParts/CalPommel.png'
        }

        axios.post('/forge', newSaber)
            .then((res) => {
                setSaberData(res.data)
            })
    }

    const deleteSaberRow = async (id) => {
        console.log(`Id: '${id}' will make a fine addition to my collection, hahahahahaaa.`)

        const newSaberArray = await axios.delete(`/delete/${id}`)

        setSaberData(newSaberArray.data)
    }

    const editSaberRow = async () => {
        
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
    />)

    return (
        <table>
            <thead>
                <GalleryTableHeader />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default GalleryTable