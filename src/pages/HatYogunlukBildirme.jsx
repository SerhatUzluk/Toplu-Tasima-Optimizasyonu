import React, { useEffect, useState } from "react";
import './style/HatYogunlukBildirme.css'
import { Navigate } from "react-router-dom";
import { duraklar }  from "../duraklar.js";
import { hatlar } from "../data.js";
import {collection, onSnapshot, addDoc, doc } from "firebase/firestore"
import {db} from '../script.js'
function HatYogunlukBildirme() {
  
  const [selectedLine, setSelectedLine] = useState("1055");  
  const [busStop, setBusStop] = useState([]);
  

  const [formData, setFormData] = useState({
    kullaniciTipi: "",
    gidisZamani: "",
    donusZamani: "",
    hatBilgisi: "",
    binilecekDurakBilgisi: "",
    inilecekDurakBilgisi: "",
    gidisYonu: "",
    haftalikKullanim: false,
  });
  const transportationLineRef = collection(db, "hatYogunlukBilgisi");
    
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const selectedHat = hatlar.find((hat) => selectedValue === hat.name);
    setSelectedLine(selectedHat.id);
  
    const filteredBusStops = duraklar
      .filter((durak) => durak.hatId == selectedHat.id)      
  
    setBusStop(filteredBusStops);      
  };

  useEffect(() => {
    
  }, [busStop]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.hatBilgisi === '' || formData.binilecekDurak === '' || formData.inilecekDurak === '' || formData.gidisZamani === '' || formData.donusZamani === ''){
      alert('Lütfen tüm alanları doldurun!')
      return;
    }
    else{
      await addDoc(transportationLineRef, formData)
      window.location.reload()
      alert('İsteğiniz başarıyla kaydedildi.')
    }
  };

  const handleInputChange = (e) => {
    const selectedValue = e.target.value;
     
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  


  return (
    <>
      <div className="container notification-content">
        <div className="notification-head-container">
          <h1 className="notification-head display-4"><b>Hat Yogunluk Bildirme</b></h1>
          </div>     
        <div className="dataInput">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userType" className="second-line-head">Kullanıcı Türü:</label>
              <select required
                name="kullaniciTipi"
                id="userTypes"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="default" disabled selected >Kullanıcı tipini seçiniz.</option>
                <option value="ogrenci">Öğrenci</option>
                <option value="calisan">Çalışan</option>
                <option value="ozel">Özel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="transportationLineInfo" className="second-line-head">
                Kullanılacak Ulaşım Hattı Bilgisi:
              </label>
              <select
                name="hatBilgisi"
                id="transportationInfo"
                onChange= {(e) => {
                  handleDropdownChange(e);
                  handleInputChange(e);
                }}
                className="form-select"
              >
                <option value="default" disabled selected>Kullanacağınız ulaşım hattını seçiniz.</option>
                {hatlar.map((hat) => (
                  <option key={hat.id}>{hat.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="transportationLineType" className="second-line-head">Hat Yönü:</label>
              <select
                name="gidisYonu"
                id="transportationLineType"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="default" disabled selected>Hat yönünü seçiniz.</option>
                <option value="true">Gidiş</option>
                <option value="false">Dönüş</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectBusStop" className="second-line-head">Bineceğiniz Durak:</label>
              <select
                name="binilecekDurakBilgisi"                
                onChange={(e) => handleInputChange(e)}
                className="form-select" 
                id="busStop"               
              >
                <option value="default" disabled selected>Bineceğiniz durağı seçiniz.</option>
                {busStop.map((durak) => (
                  <option key={durak.dataId}>{durak.durakAdi}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectBusStop" className="second-line-head">İneceğiniz Durak:</label>
              <select
                name="inilecekDurakBilgisi"              
                onChange={(e) => handleInputChange(e)}
                className="form-select"
                id="busStop"                               
              >
                <option value="default" disabled selected>İneceğiniz durağı seçiniz.</option>
                {busStop.map((durak) => (
                  <option key={durak.dataId}>{durak.durakAdi}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="goingTime" className="second-line-head">Gidiş Zamanı:</label>
              <input
                type="datetime-local"
                name="gidisZamani"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="returnTime" className="second-line-head">Geri Dönüş Zamanı:</label>
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
                className="form-check-input line-checkbox"
              />
            </div>
            <button  class="btn btn-success custom-button" type="submit" >
              Kaydet
            </button>
          </form>
        </div>
        <div className="mapInformation"></div>
      </div>

    </>
  );
}

export default HatYogunlukBildirme;
