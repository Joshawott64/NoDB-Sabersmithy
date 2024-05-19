import { useState } from 'react'
import sabersmithyTitle from './assets/PageTitles/Sabersmithy.png'
import './App.css'
import Gallery from './components/Gallery'
import Forge from './components/Forge'
import Edit from './components/Edit'

function App() {

  const [showGallery, setShowGallery] = useState(false)
  const [showForge, setShowForge] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [idToEdit, setIdToEdit] = useState()

  const toggleShowGallery = () => {
    setShowForge(false)
    setShowEdit(false)
    if (showGallery) {
      setShowGallery(false)
    } else {
      setShowGallery(true)
    }
  }

  const toggleShowForge = () => {
    setShowGallery(false)
    setShowEdit(false)
    if (showForge) {
      setShowForge(false)
    } else {
      setShowForge(true)
    }
  }

  return (
    <>
      <div>
        <img src={sabersmithyTitle} alt="Sabersmithy" />
      </div>

      <div>
        <button onClick={toggleShowForge}>Forge</button>
        <button onClick={toggleShowGallery}>Gallery</button>
      </div>
      {showGallery && <div>
        <Gallery setShowEdit={setShowEdit} setShowGallery={setShowGallery} setShowForge={setShowForge} setIdToEdit={setIdToEdit}/>
      </div>}
      {showForge && <div>
        <Forge />
        </div>}
      {showEdit && <div>
        <Edit idToEdit={idToEdit} setShowEdit={setShowEdit}/>
        </div>}
    </>
  )
}

export default App
