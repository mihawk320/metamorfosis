import React from "react";

import Cards from "./Card";

class NiñaList extends React.Component {
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
            image: "https://i.ibb.co/b6H0tz5/02.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 01G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01G",
          },
          {
            image: "https://i.ibb.co/x2zW4Tj/01.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 02G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02G",
          },
          {
            image: "https://i.ibb.co/g69YSsp/03.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 03G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03G",
          },
          {
            image: "https://i.ibb.co/gTVtxJ6/04.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 04G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04G",
          },
          {
            image: "https://i.ibb.co/Yf0V5TR/05.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 05G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05G",
          },
          {
            image: "https://i.ibb.co/Gc3P5XK/06.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 06G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06G",
          },
          {
            image: "https://i.ibb.co/87gVCDj/07.jpg",
            titulo: "Blusa de Niña",
            descripcion: "Precio: $12.000",
            referencia: "Referencia 07G",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07G",
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

export default NiñaList;
