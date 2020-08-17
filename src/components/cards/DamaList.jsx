import React from "react";

import Cards from "./Card";

class Dama extends React.Component {
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
            image: "https://i.ibb.co/Y2cWgCg/17.jpg",
            titulo: "Vestido Minnie Mouse",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 01D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01D",
          },
          {
            image: "https://i.ibb.co/1Lp7fwK/16.jpg",
            titulo: "Vestido Mickey Mouse",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 02D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02D",
          },
          {
            image: "https://i.ibb.co/cDsmnSX/15.jpg",
            titulo: "Vestido de Oso",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 03D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03D",
          },
          {
            image: "https://i.ibb.co/m5S8M24/14.jpg",
            titulo: "Vestido Minnie Mouse",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 04D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04D",
          },
          {
            image: "https://i.ibb.co/tsRSDFC/13.jpg",
            titulo: "Vestido Mickey",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 05D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05D",
          },
          {
            image: "https://i.ibb.co/30T9RL5/12.jpg",
            titulo: "Vestido Rosa",
            descripcion: "Precio: $20.000, Talla S-M",
            referencia: "Referencia 06D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06D",
          },
          {
            image: "https://i.ibb.co/4McTWs3/11.jpg",
            titulo: "Levantadora Satín - Negra",
            descripcion: "Precio: $45.000, Todas las tallas",
            referencia: "Referencia 07D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07D",
          },
          {
            image: "https://i.ibb.co/5B3TjhD/09.jpg",
            titulo: "Levantadora Satín - Rosada",
            descripcion: "Precio: $45.000, Todas las tallas",
            referencia: "Referencia 08D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia08D",
          },
          {
            image: "https://i.ibb.co/y5gMpSp/10.jpg",
            titulo: "Blusa Minnie Mouse",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 09D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia09D",
          },
          {
            image: "https://i.ibb.co/8K8QgMf/08.jpg",
            titulo: "Blusa Garfield",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 10D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia10D",
          },
          {
            image: "https://i.ibb.co/fCmG0n1/07.jpg",
            titulo: "Blusa Cartoon Network",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 11D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia11D",
          },
          {
            image: "https://i.ibb.co/zRWScdy/06.jpg",
            titulo: "Blusa Looney Tunes",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 12D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia12D",
          },
          {
            image: "https://i.ibb.co/y6nfyvZ/05.jpg",
            titulo: "Blusa de Flores",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 13D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia13D",
          },
          {
            image: "https://i.ibb.co/2tp1xcM/03.jpg",
            titulo: "Blusa de Flores",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 14D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia14D",
          },
          {
            image: "https://i.ibb.co/h9sz4vm/04.jpg",
            titulo: "Blusa Tom y Jerry",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 15D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia15D",
          },
          {
            image: "https://i.ibb.co/qgbf0DL/02.jpg",
            titulo: "Blusa Looney Tunes",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 16D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia16D",
          },
          {
            image: "https://i.ibb.co/Yfdmfw1/01.jpg",
            titulo: "Blusa Bugs Bunny",
            descripcion: "Precio: $20.000, Todas las tallas",
            referencia: "Referencia 17D",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia17D",
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

export default Dama;
