import React from 'react'

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

                </form>
            </div>
        </div>
    </>
  )
}

export default RotaBildirim