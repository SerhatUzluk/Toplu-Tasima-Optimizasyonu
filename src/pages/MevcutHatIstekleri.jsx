import React, { useEffect, useState } from "react";
function MevcutHatIstekleri() {
    const[transportationLines, setTransportationLines] = useState([]);    
    const [filteredDataList, setFilteredDataList] = useState([]);
    const[startDate, setStartDate] = useState("");
    const[endDate, setEndDate] = useState("");
    const[donusStartDate, setDonusStartDate] = useState("");
    const[donusEndDate, setDonusEndDate] = useState("");
    useEffect(() => {
        fetch("http://localhost:2555/api/hatYogunlukBilgisi")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setTransportationLines(data);
          });
      }, []);

      const handleFilter = () => {      
        const filteredData = transportationLines.filter((hatlar) => {
        const hatGidisZamani = new Date(hatlar.gidisZamani);
        const hatDonusZamani = new Date(hatlar.donusZamani);
    
          const isGidisInDateRange =
            hatGidisZamani >= new Date(startDate) && hatGidisZamani <= new Date(endDate);
          const isDonusInDateRange =
            hatDonusZamani >= new Date(donusStartDate) && hatDonusZamani <= new Date(donusEndDate);
    
          return isGidisInDateRange || isDonusInDateRange;
        });
    
        setFilteredDataList(filteredData);
      };


  return (
    <>
      <div>
        <h1>İstek Yapılan Otobüs Hatları</h1>
        <div className="form-group">
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
          <label htmlFor="">Mevcut İstekler:</label>
          <table>
            <tr><th>Hat Adı</th><th>Binilecek Durak</th><th>İnilecek Durak</th><th>Gidiş Zamanı</th><th>Dönüş Zamanı</th></tr>
            {filteredDataList.length > 0
              ? filteredDataList.map((hatlar) => (
                  <tr key={hatlar.id}>
                    <td>{hatlar.hatBilgisi}</td>{" "}
                    <td>{hatlar.binilecekDurakBilgisi}</td>{" "}
                    <td>{hatlar.inilecekDurakBilgisi}</td>{" "}
                    <td>{hatlar.gidisZamani}</td>{" "}
                    <td>{hatlar.donusZamani}</td>
                  </tr>
                ))
              : transportationLines.map((hatlar) => (
                  <tr key={hatlar.id}>
                    <td>{hatlar.hatBilgisi}</td>{" "}
                    <td>{hatlar.binilecekDurakBilgisi}</td>{" "}
                    <td>{hatlar.inilecekDurakBilgisi}</td>{" "}
                    <td>{hatlar.gidisZamani}</td>{" "}
                    <td>{hatlar.donusZamani}</td>
                  </tr>
                ))}
          </table>
        </div>

      </div>
    </>
  );
}

export default MevcutHatIstekleri;
