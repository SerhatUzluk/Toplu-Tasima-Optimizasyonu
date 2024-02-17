import React, { useEffect, useState } from 'react'
import Harita from '../components/Harita';


function Anasayfa() {
    const[busStop, setBusStop] = useState([]);
    const[selectedLine, setSelectedLine] = useState(1051);
    const[transportationLine, setTransportationLine] = useState([]);
   
    useEffect(() => {
      fetch('https://petekapi.burulas.com.tr/burulasweb/otobus/hatlar')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransportationLine(data);
        
      });
    }, []);
  

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const selectedHat = transportationLine.find((hat) => hat.HatAdi === selectedValue).HatId;
    
  // Check if selectedHat is found
    if (selectedHat) {
    // Access HatId and perform any necessary operations
      const selectedHatId = selectedHat;
      console.log(selectedHatId);
      setSelectedLine(selectedHatId);
      setBusStop([]);
    }
  };

  useEffect(() => {
    console.log(selectedLine);
    fetch(`https://petekapi.burulas.com.tr/burulasweb/otobus/duraklar?HatId=${selectedLine}`)
    .then((res) => {
      return res.json();
    })
    .then((secondData) => {
      setBusStop(secondData);
    })
  }, [selectedLine])

  
  return (
    <>
        <div className='container'>
            <div className='information'>
              <h1>Hizmetin Amacı</h1>
              <p>Bu hizmet ulaşım hatlarını kullanacağınız zaman aralıklarını ve kullanacağınız rotaların biligisini tutarak yoğunluğa en uygun taşıt sayısı ile hizmet verilmesini kolaylaştırmak için tasarlanmıştır.</p>
            </div>
            <div className='dataInput'>
              <form>
                <div className='form-group'>
                  <label htmlFor="userType">Kullanıcı Türü:</label>
                  <select name="userTypes" id="userTypes">
                    <option value="ogrenci">Öğrenci</option>
                    <option value="calisan">Çalışan</option>
                    <option value="ozel">Özel</option>
                  </select>                
                </div>
                <div className='form-group'>
                  <label htmlFor="transportationLineInfo">Kullanılacak Ulaşım Hattı Bilgisi:</label>
                  <select name="transportationInfo" id="transportationInfo" onChange={handleDropdownChange}>                    
                  {transportationLine.map((hat) =><option key={hat.HatId} >{hat.HatAdi}</option> )}                  
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor="transportationLineType">Hat Yönü:</label>
                  <select name="transportationLineType" id="transportationLineType">
                    <option value="gidis">Gidiş</option>
                    <option value="donus">Dönüş</option>                    
                  </select>                
                </div>
                <div className='form-group'>
                  <label htmlFor="selectBusStop">Bineceğiniz Durak:</label>
                  <select name="busStop" id="busStop">                    
                  {busStop.map((durak) => <option key={durak.VaryantId}>{durak.DurakAdi}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor="selectBusStop">İneceğiniz Durak:</label>
                  <select name="busStop" id="busStop">                    
                  {busStop.map((durak) => <option key={durak.VaryantId}>{durak.DurakAdi}</option>)}
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor="goingTime">Gidiş Zamanı:</label>
                  <input type="datetime-local" />
                </div>
                <div className='form-group'>
                  <label htmlFor="returnTime">Geri Dönüş Zamanı:</label>
                  <input type="datetime-local" />
                </div>
                <button type="submit" class="btn btn-primary">Kaydet</button>
              </form>
            </div>
            <div className='mapInformation'>
              
            </div>
        </div>
    </>
  )
}

export default Anasayfa