import React from "react";
import firstImage from "../images/anasayfa1.jpg";
import secondImage from "../images/anasayfa2.jpg";
import "./style/Anasayfa.css";
import { Link } from "react-router-dom";

function Anasayfa() {
  return (
    <>
      <div className="container main">
        <div className="mainHeader">
          <h1 className="display-4"><b>Toplu Taşıma Optimizasyonu'na Hoşgeldiniz...</b></h1>
        </div>

        <div className="information">          
          <hr />
          <h3 className="display-6 secondHeader"><b>Hat Yoğunluk Bildirme Hizmeti</b></h3>
          <p className="myParagraph">Bu hizmet ulaşım hatlarını kullanacağınız zaman aralıklarını ve
            kullanacağınız rotaların biligisini tutarak yoğunluğa en uygun taşıt
            sayısı ile hizmet verilmesini kolaylaştırmak için tasarlanmıştır.</p>
            <hr />
          <h3 className="display-6 secondHeader
          "><b>Rota İstek Bildirme Hizmeti</b></h3>
          <p className="myParagraph">Bu hizmet eksik olduğunu düşündüğünüz ulaşım hatları hakkında bildirim oluşturmanızı sağlayacak ayrıca yakın rotalarda yeteri kadar bildirimde bulunulduğunda
            istenilen güne ve rotaya özel araç tahsis edilmesini mümkün kılacaktır.</p>
            <hr />
        </div>
        <div className="col-md-9 myDiv">
          <img src={firstImage} class="img-fluid firstImage " alt="..." />
          <hr />
          <div className="col-md-12">
            <p className="ms-5 myParagraph">
              Şehrinizin nefesini değiştiren toplu taşıma deneyimi. En hızlı 
              rotaları planlamak ve seyahat etmek hiç bu kadar kolay olmamıştı.
            </p>
            <hr />
            <div className="link-container">
            <Link className="btn btn-success" to='/HatYogunlukBildirim'>Hat Yoğunluğu Bildirmek İçin Tıklayın</Link>
            </div>
          </div>
        </div>

        <div className="col-md-9  myDiv">
          <img src={secondImage} class="img-fluid firstImage " alt="..." />
        <hr />
        <div className="col-md-12">
          <p className="ms-5 myParagraph">
            Günlük seyahatlerinizi optimize etmek için tasarlanmış bir uygulama.
            En hızlı ve en verimli rotaların oluşturulması için rota bildiriminde bulunun, beklemeyin ve şehrinizi
            konforlu bir şekilde keşfedin.
          </p>
          <hr />
          <div className="link-container">
          <Link className="btn btn-success" to='/RotaIstekSayfasi'>Rota Oluşturmak İçin Tıklayın</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Anasayfa;
