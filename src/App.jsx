import { useState } from 'react'
import Anasayfa from './pages/Anasayfa'
import Navbar from './components/Navbar'
import 'leaflet/dist/leaflet.css';
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Anasayfa/> 
    </>
  )
}

export default App
