import { useState } from 'react'
import sabersmithyTitle from './assets/PageTitles/Sabersmithy.png'
import './App.css'
import GalleryTable from './components/GalleryTable'

function App() {

  return (
    <>
      <div>
        <img src={sabersmithyTitle} alt="Sabersmithy" />
      </div>
      <div>
        <button onClick=''>Forge</button>
        <button onClick=''>Gallery</button>
      </div>
    </>
  )
}

export default App
