import React from "react";

import Cards from "./Card";

class NiñoList extends React.Component {
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
            image: "https://i.ibb.co/JmTm04M/02.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 01N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01N",
          },
          {
            image: "https://i.ibb.co/VVsSkfK/01.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 02N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02N",
          },
          {
            image: "https://i.ibb.co/5FBbxtF/03.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 03N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03N",
          },
          {
            image: "https://i.ibb.co/Z6xVnVc/05.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 04N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04N",
          },
          {
            image: "https://i.ibb.co/C8rrbQG/04.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 05N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05N",
          },
          {
            image: "https://i.ibb.co/jLwYrQG/07.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 06N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06N",
          },
          {
            image: "https://i.ibb.co/y68RJsp/06.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 07N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07N",
          },
          {
            image: "https://i.ibb.co/rQyW4C2/08.jpg",
            titulo: "Pantaloneta de Niño",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 08N",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia08N",
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

export default NiñoList;
