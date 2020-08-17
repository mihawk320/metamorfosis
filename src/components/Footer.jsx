import React from "react";
import { Link } from "react-router-dom";
import "./styles/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Logo_footer from "../images/logo_footer.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-distributed mt-5">
        <div className="footer-right">
          <a
            href="https://www.facebook.com/MarlenyObando/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/metamorfosistienda_oficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573205365990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://ndkreative.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <Link to="/">Inicio</Link>

            <Link to="/Caballero">Caballero</Link>

            <Link to="/Dama">Dama</Link>

            <Link to="/Niño">Niño</Link>

            <Link to="/Niña">Niña</Link>

            <Link to="/LenceriaF">Lenceria</Link>
          </p>

          <p>Metamor fosis &copy; 2020</p>
        </div>
        <div className="logo__footer">
          <img
            src={Logo_footer}
            className="image_logo_footer"
            alt="logo_footer"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
