import React, { useEffect, useState } from "react";
import './style/HatYogunlukBildirme.css'
function HatYogunlukBildirme() {
  const [busStop, setBusStop] = useState([]);
  const [selectedLine, setSelectedLine] = useState(1050);
  const [transportationLine, setTransportationLine] = useState([]);

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

  useEffect(() => {
    fetch("https://petekapi.burulas.com.tr/burulasweb/otobus/hatlar")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransportationLine(data);
      });
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const selectedHat = transportationLine.find(
      (hat) => hat.HatAdi === selectedValue
    ).HatId;

    if (selectedHat) {
      const selectedHatId = selectedHat;
      console.log(selectedHatId);
      setSelectedLine(selectedHatId);
      setBusStop([]);
    }
  };

  useEffect(() => {
    console.log(selectedLine);
    fetch(
      `https://petekapi.burulas.com.tr/burulasweb/otobus/duraklar?HatId=${selectedLine}`
    )
      .then((res) => {
        return res.json();
      })
      .then((secondData) => {
        setBusStop(secondData);
      });
  }, [selectedLine]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:2555/api/hatYogunlukBilgisi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Kayıt işlemi başarılı.")
        window.location.reload();
      })
      .catch((error) => {
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
      <div className="container notification-content">
        <div className="notification-head-container">
          <h1 className="notification-head">Hat Yogunluk Bildirme</h1>
          </div>     
        <div className="dataInput">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userType">Kullanıcı Türü:</label>
              <select
                name="kullaniciTipi"
                id="userTypes"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="ogrenci">Öğrenci</option>
                <option value="calisan">Çalışan</option>
                <option value="ozel">Özel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="transportationLineInfo">
                Kullanılacak Ulaşım Hattı Bilgisi:
              </label>
              <select
                name="hatBilgisi"
                id="transportationInfo"
                onChange={(e) => {
                  handleDropdownChange(e);
                  handleInputChange(e);
                }}
                className="form-select"
              >
                {transportationLine.map((hat) => (
                  <option key={hat.HatId}>{hat.HatAdi}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="transportationLineType">Hat Yönü:</label>
              <select
                name="gidisYonu"
                id="transportationLineType"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                <option value="true">Gidiş</option>
                <option value="false">Dönüş</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectBusStop">Bineceğiniz Durak:</label>
              <select
                name="binilecekDurakBilgisi"
                id="busStop"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                {busStop.map((durak) => (
                  <option key={durak.VaryantId}>{durak.DurakAdi}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="selectBusStop">İneceğiniz Durak:</label>
              <select
                name="inilecekDurakBilgisi"
                id="busStop"
                onChange={(e) => handleInputChange(e)}
                className="form-select"
              >
                {busStop.map((durak) => (
                  <option key={durak.VaryantId}>{durak.DurakAdi}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="goingTime" className="second-map-head">Gidiş Zamanı:</label>
              <input
                type="datetime-local"
                name="gidisZamani"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="returnTime" className="second-map-head">Geri Dönüş Zamanı:</label>
              <input
                type="datetime-local"
                name="donusZamani"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="isWeekly" className="second-map-head">Haftalık Kullanımsa Seçiniz:</label>
              <input
                type="checkbox"
                name="haftalikKullanim"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <button type="submit" class="btn btn-success custom-button">
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
