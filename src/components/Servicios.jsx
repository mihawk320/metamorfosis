import React from "react";
import "./styles/ServicesStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCoins,
  faCheckCircle,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

class Servicios extends React.Component {
  render() {
    return (
      <section className="page-section mb-5" id="services">
        <div className="container">
          <h2 className="text-center mt-0 mt-5">Nuestro servicios</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center mb-4 ">
              <div>
                <FontAwesomeIcon icon={faTruck} className="fa-4x icono_truck" />
                <h3 className="h4 mb-2 letras_servicios">
                  Entregas nacionales
                </h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-4 ">
              <div>
                <FontAwesomeIcon
                  icon={faCoins}
                  className="fa-4x  icono_moneda"
                />
                <h3 className="h4 mb-2 letras_servicios">Bajos precios</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center mb-4 ">
              <div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="fa-4x icono_check"
                />
                <h3 className="h4 mb-2 letras_servicios">Excelente calidad</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center ">
              <div>
                <FontAwesomeIcon
                  icon={faTshirt}
                  className="fa-4x icono_shirt"
                />
                <h3 className="h4 mb-2 letras_servicios">Mucho estilo</h3>
                <p className="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Servicios;
