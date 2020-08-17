import React from "react";

import Catalogo from "../components/Catalogo";
import Servicios from "../components/Servicios";
import Parallax from "../components/Parallax";
import Contact from "../components/Contact";

function App() {
  return (
    <React.Fragment>
      <Catalogo />
      <Servicios />
      <Parallax />
      <Contact />
    </React.Fragment>
  );
}

export default App;
