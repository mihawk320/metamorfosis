import React from "react";
import Nav from "./Nav";
import "./styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main id="main" className="mb-3">
          <div
            className="carousel slide carousel-fade"
            id="carousel"
            data-ride="carousel"
            data-pause="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Banner}
                  className="d-block w-100"
                  alt="banner"
                  loading="lazy"
                />
              </div>

              <div className="overlay">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 offset-md-6 text-center text-md-right">
                      <h1>Metamor Fosis</h1>
                      <p className="d-none d-md-block">
                        Lanzamos nueva lencería Femenina
                      </p>
                      <Link to="/LenceriaF" className="btn btn-outline-light">
                        Ver catálogo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Header;
