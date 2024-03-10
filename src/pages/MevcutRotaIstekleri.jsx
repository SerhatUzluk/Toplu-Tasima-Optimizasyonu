import React, { useState, useEffect } from "react";
import "./style/MevcutRotaBildirim.css";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../script.js";
function MevcutRotaIstekleri() {
  const [routes, setRoutes] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [donusStartDate, setDonusStartDate] = useState("");
  const [donusEndDate, setDonusEndDate] = useState("");
  const [filteredDataList, setFilteredDataList] = useState([]);

  const currentRoute = collection(db, "RotaIstemBilgisi");

  useEffect(() => {
    const getRoutesData = async () => {
      try {
        const data = await getDocs(currentRoute);
        setRoutes(
          data.docs.map((elem) => ({ ...elem.data(), id: elem.id }))
        );
      } catch (error) {
        console.error("Error fetching route data:", error);
      }
    };
    getRoutesData();
  }, [currentRoute]);

  const handleFilter = () => {
    const filteredData = routes.filter((rotalar) => {
      const gidisZamani = new Date(rotalar.gidisZamani);
      const donusZamani = new Date(rotalar.donusZamani);

      const isGidisInDateRange =
        gidisZamani >= new Date(startDate) && gidisZamani <= new Date(endDate);
      const isDonusInDateRange =
        donusZamani >= new Date(donusStartDate) &&
        donusZamani <= new Date(donusEndDate);

      return isGidisInDateRange || isDonusInDateRange;
    });
    if (filteredData == "") {
      alert("Belirtilen tarihlerde istek bulunamamıştır.");
    }
    setFilteredDataList(filteredData);
  };

  return (
    <>
      <div className="container container-routes">
        <div className="form-group">
          <div className="routes-head-container">
            <h1 className="display-4">
              <b>İstek Yapılan Rotalar</b>
            </h1>
          </div>
          <hr />
          <h2 className="request-second-head display-5">
            Gidiş Tarihini Seçiniz
          </h2>
          <label htmlFor="start" className="date-head">
            Başlangıç Tarihi:
          </label>
          <input
            type="datetime-local"
            id="start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
          />
          <label htmlFor="end" className="date-head">
            Bitiş Tarihi:
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
        <div className="routes-table-container form-group">
          <label htmlFor="" className="display-5">
            <b>Mevcut Rota İstekleri</b>
          </label>
          <table className="table table-bordered">
            <tr>
              <th>Başlangıç Latitude</th>
              <th>Başlangıç Longitude</th>
              <th>Bitiş Latitude</th>
              <th>Bitiş Longitude</th>
              <th>Gidiş Zamanı</th>
              <th>Dönüş Zamanı</th>
              <th>Kullanıcı Tipi</th>
            </tr>
            {filteredDataList.length > 0
              ? filteredDataList.map((rotalar) => (
                  <tr key={rotalar.id}>
                    <td>{rotalar.baslangicLat}</td>
                    <td>{rotalar.baslangicLng}</td>
                    <td>{rotalar.bitisLat}</td>
                    <td>{rotalar.bitisLng}</td>
                    <td>{rotalar.gidisZamani.toLocaleString()}</td>
                    <td>{rotalar.donusZamani.toLocaleString()}</td>
                    <td>{rotalar.kullaniciTipi}</td>
                  </tr>
                ))
              : routes.map((rotalar) => (
                  <tr key={rotalar.id}>
                    <td>{rotalar.baslangicLat}</td>
                    <td>{rotalar.baslangicLng}</td>
                    <td>{rotalar.bitisLat}</td>
                    <td>{rotalar.bitisLng}</td>
                    <td>{rotalar.gidisZamani.toLocaleString()}</td>
                    <td>{rotalar.donusZamani.toLocaleString()}</td>
                    <td>{rotalar.kullaniciTipi}</td>
                  </tr>
                ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default MevcutRotaIstekleri;
