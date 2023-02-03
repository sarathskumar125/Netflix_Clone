import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { action, originals,comedy,horror,romance,documentaries } from './url'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix originals' />
      <RowPost url={action} title="Action" small/>
      <RowPost url={comedy} title="Comedy" small/>
      <RowPost url={horror} title="Horror" small/>
      <RowPost url={romance} title="Romance" small/>
      <RowPost url={documentaries} title="Documentaries" small/>
    </div>
  )
}

export default App