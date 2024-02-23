import React, { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import osm from "./osm-provider";
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { MainContext, useContext } from "../SiteContext";
import '../pages/style/RotaBildirim.css'
function Harita() {
  const { startLocation, setStartLocation, endLocation, setEndLocation } =
    useContext(MainContext);
  const [route, setRoute] = useState([]);
  const [center, setCenter] = useState({ lat: 40.193298, lng: 29.074202 });
  const [markers, setMarkers] = useState([]);
  const zoomLevel = 10;
  const provider = new OpenStreetMapProvider();

  const handleDoubleClick = (event) => {
    event.preventDefault();
    const { lat, lng } = event.latlng;

    setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
  };
  const handleStartInputChange = async (event) => {
    const { value } = event.target;
    // Örnek olarak, virgül ile ayrılan bir stringi iki konum bilgisine böler
    try {
      const results = await provider.search({ query: value });
      if (results.length > 0) {
        const { y, x } = results[0];
        setStartLocation({ lat: y, lng: x });
      } else {
        // Konum bulunamadığında yapılacak işlemleri burada gerçekleştirebilirsiniz
        console.warn("Konum bulunamadı:", value);
      }
    } catch (error) {
      console.error("Konum çözümleme hatası:", error);
    }
  };
  const handleEndInputChange = async (event) => {
    const { value } = event.target;
    try {
      const results = await provider.search({ query: value });
      if (results.length > 0) {
        const { y, x } = results[0];
        setEndLocation({ lat: y, lng: x });
      } else {
        // Konum bulunamadığında yapılacak işlemleri burada gerçekleştirebilirsiniz
        console.warn("Konum bulunamadı:", value);
      }
    } catch (error) {
      console.error("Konum çözümleme hatası:", error);
    }
  };
  const handleCreateRoute = () => {
    // Rota oluşturmak için iki konum arasında bir çizgi (Polyline) ekleyin
    setRoute([startLocation, endLocation]);
  };

  const searchControl = new GeoSearchControl({
    provider: provider,
    autoCompleteDelay: 300,
    showMarker: false,
    retainZoomLevel: false,
    animateZoom: true,
    autoClose: true,
    searchLabel: "Adres, ilçe, mahalle...",
    keepResult: false,
  });

  return (
    <>
      <div>
        <div>
          <label className="second-map-head">Başlangıç Konumu:</label>
          <input type="text" onChange={handleStartInputChange} className="input-group-text" />
        </div>
        <div>
          <label className="second-map-head">Bitiş Konumu:</label>          
          <input type="text" onChange={handleEndInputChange} className="input-group-text"/>
        </div>        
      </div>
      <hr />
      <div className="route-map-container">
        <MapContainer
          center={[40.193298, 29.074202]}
          zoom={zoomLevel}
          className="mapContent "
          onClick={handleDoubleClick}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
          {/* Başlangıç Konumu */}
          {startLocation && (
            <Marker position={startLocation}>
              <Popup>Başlangıç Konumu</Popup>
            </Marker>
          )}

          {/* Bitiş Konumu */}
          {endLocation && (
            <Marker position={endLocation}>
              <Popup>Bitiş Konumu</Popup>
            </Marker>
          )}

          {/* Rota (Polyline) */}
          {route.length > 0 && <Polyline positions={route} color="blue" />}
        </MapContainer>
      </div>
    </>
  );
}

export default Harita;
