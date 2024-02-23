import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";
import logo from "../images/BursaLogo.jpg";
function Footer() {
  return (
    <>
      <div className="footer">
        <ul
          className="nav justify-content-center border-bottom pb-3 mb-3"
          data-bs-theme="dark"
        >
          
          <li className="nav-item">
            <Link to="/RotaIstekSayfasi" className="nav-link px-2 text-muted footer-link">
              Rota Bildirme Hizmeti
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/HatYogunlukBildirim" className="nav-link px-2 text-muted footer-link">
              Hat Yoğunluk Bidirme Hizmeti
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MevcutRotaIstekleri" className="nav-link px-2 text-muted footer-link">
              Bildirilen Rotaları Görüntüle
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MevcutHatIstekleri" className="nav-link px-2 text-muted footer-link">
              Hat Yoğunluklarını Görüntüle
            </Link>
          </li>
          <li className="nav-item footer-logo-container">
            <Link to="/#" className="nav-link px-2 text-muted">
              <img src={logo} className="footer-logo" />
            </Link>
          </li>        
        </ul>
      </div>
    </>
  );
}

export default Footer;
