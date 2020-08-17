import React from "react";
import "./styles/CatalogoStyle.css";
import { Link } from "react-router-dom";

class Catalogo extends React.Component {
  render() {
    return (
      <section className="invitados container seccion mt-5">
        <h2 className="mb-4">Accede a nuestro catálogo</h2>

        <ul className="lista-invitados clearfix">
          <li>
            <Link to="/Caballero">
              <div className="invitado">
                <img
                  src="https://www.miapto.es/images/miaptoes/727-broches-para-el-cuello-de-la-camisa-pin-ajustable-ba%C3%B1o-de-2093.jpg"
                  alt="imagen invitado"
                />
                <p>Caballero</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/Dama">
              <div className="invitado">
                <img
                  src="https://i.pinimg.com/736x/4a/9e/f1/4a9ef1becd12b0e7602000d2194a904f.jpg"
                  alt="imagen invitado"
                />
                <p>Dama</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/Niño">
              <div className="invitado">
                <img
                  src="https://img.europapress.es/fotoweb/fotonoticia_20180927155630-1809545159_800.jpg"
                  alt="imagen invitado"
                />
                <p>Niño</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/Niña">
              <div className="invitado">
                <img
                  src="https://i.pinimg.com/originals/e6/7d/9c/e67d9cb16d46bf4973b445da407f49d1.jpg"
                  alt="imagen invitado"
                />
                <p>Niña</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/LenceriaF">
              <div className="invitado">
                <img
                  src="https://ae01.alicdn.com/kf/HTB1iDGPNFXXXXbvXpXXq6xXFXXXA/Adultos-Lencer-a-Er-tica-de-la-Ropa-Interior-Atractiva-Para-Las-Mujeres-Negro-Blanco-de.jpg"
                  alt="imagen invitado"
                />
                <p>Lenceria mujer</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/LenceriaM">
              <div className="invitado">
                <img
                  src="https://www.toallasdesechables.com/wp-content/uploads/2018/04/tanga-para-hombre.jpg"
                  alt="imagen invitado"
                />
                <p>Lenceria hombre</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default Catalogo;
