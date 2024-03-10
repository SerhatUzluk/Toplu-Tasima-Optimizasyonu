import React from 'react'
import attentionImg from '../images/attention.png'
function HataSayfasi() {
  return (
    <>
        <div>
            <div className='attention-image'>
                <img src={attentionImg} alt="hata-görseli" />
            </div>
            <h2 className='display-3 attention-head'>Hata Oluştu</h2>
            <p className='attention-paragraph'>Beklenmeyen bir durumla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz !</p>
            <Link to='/'><b>Ana sayfaya dönmek için tıklayınız.</b></Link>
        </div>
    </>
  )
}

export default HataSayfasi