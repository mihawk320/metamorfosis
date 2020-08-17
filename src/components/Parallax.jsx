import React from "react";
import "./styles/ParallaxStyle.css";

class Parallax extends React.Component {
  render() {
    return (
      <div className="newsletter parallax" loading="lazy">
        <div className="contenido contenedor">
          <p>Contáctanos por whatsapp</p>
          <h3 className="mb-3">Metamorfosis</h3>
          <a
            href="https://api.whatsapp.com/send?phone=573205365990"
            className="btn btn-outline-light btn-lg"
          >
            Ir al Whatsapp
          </a>
        </div>
      </div>
    );
  }
}

export default Parallax;
