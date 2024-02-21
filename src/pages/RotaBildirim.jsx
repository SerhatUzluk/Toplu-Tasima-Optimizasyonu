import React, { useState, useEffect } from "react";
import Harita from "../components/Harita";
import { MainContext, useContext } from "../SiteContext";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:2555/api/rotaIstemBilgisi", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      method: "POST",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Rota isteği gönderildi.");
        console.log(formData);
      })
      .catch((error) => {
        // Post işlemi sırasında bir hata oluştuğunda buraya gelir
        console.log(formData);
        console.error("Post hatası:", error);
      });
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
      <div className="container">
        <div className="serviceInfo">
          <h1>Hizmetin Amacı</h1>
          <p>Bu hizmet eksik olduğunu düşündüğünüz ulaşım hatları hakkında bildirim oluşturmanızı sağlayacak ayrıca yakın rotalarda yeteri kadar bildirimde bulunulduğunda
            istenilen güne ve rotaya özel araç tahsis edilmesini mümkün kılacaktır.
          </p>
        </div>
        <div className="dataInput">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userType">Kullanıcı Türü:</label>
              <select
                id="userTypes"
                name="kullaniciTipi"
                onChange={(e) => handleInputChange(e)}
              >
                <option value="ogrenci">Öğrenci</option>
                <option value="calisan">Çalışan</option>
                <option value="ozel">Özel</option>
              </select>
            </div>
            <div className="mapContent">
              <Harita />
            </div>
            <div className="form-group">
              <label htmlFor="goingTime">Gidiş Zamanı:</label>
              <input
                type="datetime-local"
                name="gidisZamani"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="returnTime">Geri Dönüş Zamanı:</label>
              <input
                type="datetime-local"
                name="donusZamani"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="isWeekly">Haftalık Kullanımsa Seçiniz:</label>
              <input
                type="checkbox"
                name="haftalikKullanim"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleSubmit}
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
