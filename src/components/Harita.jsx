import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import osm from './osm-provider'
import 'leaflet/dist/leaflet.css';

function Harita() {
  const [center, setCenter] = useState({lat:40.193298, lng: 29.074202});
  const [markers, setMarkers] = useState([]);
  const zoomLevel = 10;
  

  const handleDoubleClick = (event) => {
    event.preventDefault(); // dblclick olayının varsayılan davranışını engelle

    const { lat, lng } = event.latlng;

    // Yeni işaretlenen konumu ekleyin
    setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
  };
  

  return (
    <>
      <div >
        <MapContainer
        center={center}
        zoom={zoomLevel}      
        className='mapContent'
        onClick={handleDoubleClick}
        >
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
          {/* Mevcut Konum */}
          <Marker position={center}>
            <Popup>Mevcut Konum</Popup>
          </Marker>

          {/* İşaretlenen Konumlar */}
          {markers.map((marker, index) => (
            <Marker key={index} position={marker}>
              <Popup>İşaretlenen Konum {index + 1}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  )
}

export default Harita