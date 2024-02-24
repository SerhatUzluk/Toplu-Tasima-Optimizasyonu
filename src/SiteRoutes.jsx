import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa';
import RotaBildirim from './pages/RotaBildirim';
import MevcutHatIstekleri from './pages/MevcutHatIstekleri';
import MevcutRotaIstekleri from './pages/MevcutRotaIstekleri';
import HatYogunlukBildirme from './pages/HatYogunlukBildirme';


function SiteRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Anasayfa/>}/>
        <Route path='/HatYogunlukBildirim' element={<HatYogunlukBildirme/>} />
        <Route path='/RotaIstekSayfasi' element={<RotaBildirim/>} />
        <Route path='/MevcutHatIstekleri' element={<MevcutHatIstekleri/>}/>
        <Route path='/MevcutRotaIstekleri' element={<MevcutRotaIstekleri/>} />        
    </Routes>
  );
}

export default SiteRoutes