import React, { useEffect, useState } from "react";
import "./style/MevcutHatIstekleri.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../script.js";
function MevcutHatIstekleri() {
  const [transportationLines, setTransportationLines] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [donusStartDate, setDonusStartDate] = useState("");
  const [donusEndDate, setDonusEndDate] = useState("");

  const currentLdi = collection(db, "hatYogunlukBilgisi");

  useEffect(() => {
    const getTransportationData = async () => {
      try {
        const data = await getDocs(currentLdi);
        setTransportationLines(
          data.docs.map((elem) => ({ ...elem.data(), id: elem.id }))
        );
      } catch (error) {
        console.error("Error fetching transportation data:", error);
      }
    };
    getTransportationData();
  }, [currentLdi]);
  

  const handleFilter = () => {
    const filteredData = transportationLines.filter((hatlar) => {
      const hatGidisZamani = new Date(hatlar.gidisZamani);
      const hatDonusZamani = new Date(hatlar.donusZamani);

      // startDate, endDate, donusStartDate, donusEndDate değerleriniz güncelleniyor mu?
      const isGidisInDateRange =
        hatGidisZamani >= new Date(startDate) &&
        hatGidisZamani <= new Date(endDate);
      const isDonusInDateRange =
        hatDonusZamani >= new Date(donusStartDate) &&
        hatDonusZamani <= new Date(donusEndDate);

      return isGidisInDateRange || isDonusInDateRange;
    });

    setFilteredDataList(filteredData);
  };

  // handleFilter fonksiyonunu, startDate, endDate, donusStartDate, donusEndDate bağımlılıklarına ekleyerek useEffect içinde otomatik olarak çalışmasını sağlayabilirsiniz.
  useEffect(() => {
    handleFilter();
  }, [startDate, endDate, donusStartDate, donusEndDate, transportationLines]);

  return (
    <>
      <div className="container container-request">
        <div className="request-head-container">
          <h1 className="request-head display-4">
            <b>İstek Yapılan Otobüs Hatları</b>
          </h1>
        </div>
        <hr />
        <div className="form-group">
          <h2 className="request-second-head display-5">
            Gidiş Tarihini Seçiniz
          </h2>
          <label htmlFor="start" className="date-head">
            Gidiş Başlangıç Tarihi:
          </label>
          <input
            type="datetime-local"
            id="start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
          />
          <label htmlFor="end" className="date-head">
            Gidiş Bitiş Tarihi:
          </label>
          <input
            type="datetime-local"
            id="end"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          onClick={handleFilter}
          className="btn btn-success custom-button"
        >
          Gidişe Göre Filtrele
        </button>
        <hr />
        <div className="form-group">
          <h2 className="request-second-head display-5">
            Dönüş Tarihini Seçiniz
          </h2>
          <label htmlFor="donusStart" className="date-head">
            Dönüş Başlangıç Tarihi:
          </label>
          <input
            type="datetime-local"
            id="donusStart"
            value={donusStartDate}
            onChange={(e) => setDonusStartDate(e.target.value)}
            className="form-control"
          />
          <label htmlFor="donusEnd" className="date-head">
            Dönüş Bitiş Tarihi:
          </label>
          <input
            type="datetime-local"
            id="donusEnd"
            value={donusEndDate}
            onChange={(e) => setDonusEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          onClick={handleFilter}
          className="btn btn-success custom-button"
        >
          Dönüşe Göre Filtrele
        </button>
        <hr />
        <div className="form-group request-table-container">
          <label htmlFor="" className="table-head display-5">
            <b>Mevcut İstekler</b>
          </label>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="col">Hat Adı</th>
                <th scope="col">Binilecek Durak</th>
                <th scope="col">İnilecek Durak</th>
                <th scope="col">Gidiş Zamanı</th>
                <th scope="col">Dönüş Zamanı</th>
              </tr>
              {filteredDataList.length > 0
                ? filteredDataList.map((hatlar) => (
                    <tr key={hatlar.id}>
                      <td>{hatlar.hatBilgisi}</td>{" "}
                      <td>{hatlar.binilecekDurakBilgisi}</td>{" "}
                      <td>{hatlar.inilecekDurakBilgisi}</td>{" "}
                      <td>{hatlar.gidisZamani.toLocaleString()}</td>{" "}
                      <td>{hatlar.donusZamani.toLocaleString()}</td>
                    </tr>
                  ))
                : transportationLines.map((hatlar) => (
                    <tr key={hatlar.id}>
                      <td>{hatlar.hatBilgisi}</td>{" "}
                      <td>{hatlar.binilecekDurakBilgisi}</td>{" "}
                      <td>{hatlar.inilecekDurakBilgisi}</td>{" "}
                      <td>{hatlar.gidisZamani.toLocaleString()}</td>{" "}
                      <td>{hatlar.donusZamani.toLocaleString()}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MevcutHatIstekleri;
