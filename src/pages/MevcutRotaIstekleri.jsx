import React, { useState, useEffect } from "react";
//Filtreleme işleminde bir problem var !
function MevcutRotaIstekleri() {
  const [routes, setRoutes] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [donusStartDate, setDonusStartDate] = useState("");
  const [donusEndDate, setDonusEndDate] = useState("");
  const [filteredDataList, setFilteredDataList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2555/api/rotaIstemBilgisi")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRoutes(data);
      });
  }, []);

  const handleFilter = () => {
    console.log(routes);
    const filteredData = routes.filter((rotalar) => {
      const gidisZamani = new Date(rotalar.gidisZamani);
      const donusZamani = new Date(rotalar.donusZamani);

      const isGidisZamaniRange =
        gidisZamani >= new Date(startDate) && gidisZamani <= new Date(endDate);
      const isDonusZamaniRange =
        donusZamani >= new Date(donusStartDate) && donusZamani <= new Date(donusEndDate);
        

      return isGidisZamaniRange || isDonusZamaniRange;
    });
    setFilteredDataList(filteredData);
  };

  return (
    <>
      <div>
        <h1>İstek Yapılan Rotalar</h1>
        <h2>Gidiş Tarihini Seçiniz</h2>
        <label htmlFor="start">Başlangıç Tarihi:</label>
        <input
          type="datetime-local"
          id="start"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end">Bitiş Tarihi:</label>
        <input
          type="datetime-local"
          id="end"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Filtrele</button>
      <div className="form-group">
        <h2>Dönüş Saatini Seçiniz:</h2>
        <label htmlFor="donusStart">Dönüş Başlangıç Tarihi:</label>
        <input
          type="datetime-local"
          id="donusStart"
          value={donusStartDate}
          onChange={(e) => setDonusStartDate(e.target.value)}
        />
        <label htmlFor="donusEnd">Dönüş Bitiş Tarihi:</label>
        <input
          type="datetime-local"
          id="donusEnd"
          value={donusEndDate}
          onChange={(e) => setDonusEndDate(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Dönüş Filtrele</button>

      <div className="form-group">
        <label htmlFor="">Mevcut Rota İstekleri:</label>
        <table>
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
            ? filteredDataList.map((rota) => (
              <tr key={rotalar.id}>
              <td>{rotalar.baslangicLat}</td>
              <td>{rotalar.baslangicLng}</td>
              <td>{rotalar.bitisLat}</td>
              <td>{rotalar.bitisLng}</td>
              <td>{rotalar.gidisZamani}</td>
              <td>{rotalar.donusZamani}</td>
              <td>{rotalar.kullaniciTipi}</td>
            </tr>
              ))
            : routes.map((rotalar) => (
                <tr key={rotalar.id}>
                  <td>{rotalar.baslangicLat}</td>
                  <td>{rotalar.baslangicLng}</td>
                  <td>{rotalar.bitisLat}</td>
                  <td>{rotalar.bitisLng}</td>
                  <td>{rotalar.gidisZamani}</td>
                  <td>{rotalar.donusZamani}</td>
                  <td>{rotalar.kullaniciTipi}</td>
                </tr>
              ))}
        </table>
      </div>
    </>
  );
}

export default MevcutRotaIstekleri;
