import React, { useState, useEffect } from "react";
import Harita from "../components/Harita";
import { MainContext, useContext } from "../SiteContext";
import './style/RotaBildirim.css'
import {collection, addDoc } from "firebase/firestore"
import {db} from '../script.js'
function RotaBildirim() {
  const { startLocation, endLocation } = useContext(MainContext);
  const { lat: baslangicLat, lng: baslangicLng } = ({});
  const { lat: bitisLat, lng: bitisLng } = ({});
  useEffect(() => {
    // startLocation veya endLocation değişirse formData'yı güncelle
    setFormData((prevFormData) => ({
      ...prevFormData,
        baslangicLat: startLocation.lat,
        baslangicLng: startLocation.lng,
        bitisLat: endLocation.lat,
        bitisLng: endLocation.lng
    }));
  }, [startLocation, endLocation]);

  const [formData, setFormData] = useState({
    kullaniciTipi: "",
    gidisZamani: "",
    donusZamani: "",
    baslangicLat: baslangicLat,
    baslangicLng: baslangicLng,
    bitisLat: bitisLat,
    bitisLng: bitisLng,
    haftalikKullanim: false,
  });

  const transportationLineRef = collection(db, "RotaIstemBilgisi");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.kullaniciTipi == '' || formData.gidisZamani == '' || formData.donusZamani == '' || formData.baslangicLat == '' || formData.baslangicLng == '' || formData.bitisLat == '' || formData.bitisLng == ''){
      alert('Lütfen tüm alanları doldurun!');      
    }
    else{
      await addDoc(transportationLineRef, formData)
      window.location.reload()
      alert('Rota bildirme işleminiz başarıyla gerçekleştirildi.');
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  return (
    <>
      <div className="container route-plan-container">
        <div>
          <h1 className="display-4 route-head-container"><b>Rota İstek Bildirimi</b></h1>
        </div>
        <div className="serviceInfo">          
        </div>
        <div className="dataInput">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userType" className="second-route-head">Kullanıcı Türü:</label>
              <select
                id="userTypes"
                name="kullaniciTipi"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="default" disabled selected>Kullanıcı tipini seçiniz.</option>
                <option value="ogrenci">Öğrenci</option>
                <option value="calisan">Çalışan</option>
                <option value="ozel">Özel</option>
              </select>
            </div>
            <div className="mapContent">
              <Harita />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="goingTime" className="second-route-head">Gidiş Zamanı:</label>
              <input
                type="datetime-local"
                name="gidisZamani"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="returnTime" className="second-route-head">Geri Dönüş Zamanı:</label>
              <input
                type="datetime-local"
                name="donusZamani"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group weekly-content">
              <label htmlFor="isWeekly" className="weekly-head"><b>Haftalık Kullanımsa Seçiniz:</b></label>
              <input
                type="checkbox"
                name="haftalikKullanim"
                onChange={(e) => handleInputChange(e)}
                className="form-check-input route-checkbox"                
              />
            </div>
            <button              
              class="btn btn-primary"              
              className="btn btn-success custom-button"
              type='submit'
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RotaBildirim;
