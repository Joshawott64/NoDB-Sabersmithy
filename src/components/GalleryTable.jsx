import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableHeader from './GalleryTableHeader'

const GalleryTable = () => {

    const [saberData, setSaberData] = useState([])

    useInsertionEffect(() => {
        console.log('Sabers Array:', saberData)

        axios.get('/gallery')
            .then((res) => {
                setSaberData(res.data)
            })
    }, [])

    const rows = saberData.map((el)  => <TableRow
        id={el.id}
        key={el.id}
        initialIsDefault={el.isDefault}
        initialName={el.name}
        initialColor={el.color}
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