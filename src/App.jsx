import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Caballero from "./pages/Caballero";
import Dama from "./pages/Dama";
import LenceriaF from "./pages/lenceriaFemenina";
import LenceriaM from "./pages/lenceriaMasculina";
import Niño from "./pages/Niño";
import Niña from "./pages/Niña";
import DynamicScrollToTop from "./components/DynamicScrollToTop";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <DynamicScrollToTop />
        <Layout>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Caballero" component={Caballero} />
            <Route exact path="/Dama" component={Dama} />
            <Route exact path="/LenceriaF" component={LenceriaF} />
            <Route exact path="/LenceriaM" component={LenceriaM} />
            <Route exact path="/Niño" component={Niño} />
            <Route exact path="/Niña" component={Niña} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
