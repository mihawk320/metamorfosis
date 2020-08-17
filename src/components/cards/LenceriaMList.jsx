import React from "react";

import Cards from "./Card";

class LenceriaMList extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            image: "https://i.ibb.co/tbRscmZ/07.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 01LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01LC",
          },
          {
            image: "https://i.ibb.co/1TwzB17/06.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 02LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02LC",
          },

          {
            image: "https://i.ibb.co/ZWdk8sK/04.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 03LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03LC",
          },
          {
            image: "https://i.ibb.co/b6dFQxq/03.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 04LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04LC",
          },
          {
            image: "https://i.ibb.co/ZNPGKVm/01.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 05LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05LC",
          },
          {
            image: "https://i.ibb.co/TkfGsm2/02.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 06LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06LC",
          },
          {
            image: "https://i.ibb.co/2yRLk7p/05.jpg",
            titulo: "Boxer Caballero",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 07LC",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07LC",
          },
        ],
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenteDidUpdate()");

    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }
  componentWillUnmount() {
    console.log("6. componentWillUnMount()");
    clearTimeout(this.timeoutId);
  }
  render() {
    console.log("2/4. render()");
    return (
      <div>
        <div className="container">
          <Cards cards={this.state.data} />
        </div>
      </div>
    );
  }
}

export default LenceriaMList;
