import { useState } from 'react'
import Anasayfa from './pages/Anasayfa'
import Navbar from './components/Navbar'
import 'leaflet/dist/leaflet.css';
import './App.css'
import RotaBildirim from './pages/RotaBildirim';
import { MainContext } from './SiteContext';
import MevcutHatIstekleri from './pages/MevcutHatIstekleri';
import MevcutRotaIstekleri from './pages/MevcutRotaIstekleri';
import SiteRoutes from './SiteRoutes';
import Footer from './components/Footer';
function App() {
  const [startLocation, setStartLocation] = useState({ lat: null, lng: null });
  const [endLocation, setEndLocation] = useState({ lat: null, lng: null });
  const data = {
    startLocation,
    setStartLocation,
    endLocation,
    setEndLocation
  }

  return (
    <>
    <Navbar/>
    <MainContext.Provider value={data}>
    <SiteRoutes/>
    </MainContext.Provider>
    <Footer/>
    </>
  )
}

export default App
