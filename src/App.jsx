import { useState } from 'react'
import Anasayfa from './pages/Anasayfa'
import Navbar from './components/Navbar'
import 'leaflet/dist/leaflet.css';
import './App.css'
import RotaBildirim from './pages/RotaBildirim';

function App() {

  return (
    <>
    <Navbar/>
    <RotaBildirim/>
    </>
  )
}

export default App
