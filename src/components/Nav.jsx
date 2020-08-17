import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Menu from "../images/menu.svg";

import "./styles/navbarStyle.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top mb-5">
        <div className="container">
          <Link to="/">
            <img src={Logo} className="logo" alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Menu} className="menu" alt="menu" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#hero"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lenceria
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/LenceriaF">
                    Femenina
                  </Link>
                  <Link className="dropdown-item" to="/LenceriaM">
                    Masculina
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Caballero">
                  Caballero
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dama">
                  Dama
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Niño">
                  Niño
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Niña">
                  Niña
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
