import React from 'react'
import Harita from '../components/Harita'

function RotaBildirim() {
  return (
    <>
        <div className='container'>
            <div className='serviceInfo'>
                <h1></h1>
                <p></p>
            </div>
            <div className='dataInput'>
                <form action="">
                    <div className='form-group'>
                    <label htmlFor="userType">Kullanıcı Türü:</label>
                    <select name="userTypes" id="userTypes">
                        <option value="ogrenci">Öğrenci</option>
                        <option value="calisan">Çalışan</option>
                        <option value="ozel">Özel</option>
                    </select>                
                    </div>
                    <div className='mapContent'>
                        <Harita/>
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
        </div>
    </>
  )
}

export default RotaBildirim