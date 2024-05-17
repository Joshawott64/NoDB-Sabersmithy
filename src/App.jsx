import { useState } from 'react'
import sabersmithyTitle from './assets/PageTitles/Sabersmithy.png'
import './App.css'
import Gallery from './components/Gallery'
import Forge from './components/Forge'

function App() {

  const [showGallery, setShowGallery] = useState(false)
  const [showForge, setShowForge] = useState(false)

  const toggleShowGallery = () => {
    setShowForge(false)
    if (showGallery) {
      setShowGallery(false)
    } else {
      setShowGallery(true)
    }
  }

  const toggleShowForge = () => {
    setShowGallery(false)
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
        <Gallery />
      </div>}
      {showForge && <div>
        <Forge />
        </div>}
    </>
  )
}

export default App
