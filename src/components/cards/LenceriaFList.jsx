import React from "react";

import Cards from "./Card";

class LenceriaFList extends React.Component {
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
            image: "https://i.ibb.co/LgdfBHv/pijama7.jpg",
            titulo: "Pijama Blanca - Satín",
            descripcion: "Precio: $30.000",
            referencia: "Referencia 01LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01LF",
          },
          {
            image: "https://i.ibb.co/bWCXqkD/pijama6.jpg",
            titulo: "Pijama Fucsia en Satín y Encaje",
            descripcion: "Precio: $35.000",
            referencia: "Referencia 02LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02LF",
          },
          {
            image: "https://i.ibb.co/9bTp2fg/pijama5.jpg",
            titulo: "Pijama vinotinto",
            descripcion: "Precio: $60.000",
            referencia: "Referencia 03LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03LF",
          },
          {
            image: "https://i.ibb.co/1mN8HWR/pijama3.jpg",
            titulo: "Pijama Roja",
            descripcion: "Precio: $50.000",
            referencia: "Referencia 04LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04LF",
          },
          {
            image: "https://i.ibb.co/C6gvMS3/pijama2.jpg",
            titulo: "Pijama Negra - Satín",
            descripcion: "Precio: $40.000",
            referencia: "Referencia 05LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05LF",
          },
          {
            image: "https://i.ibb.co/KygC9wq/pijama1.jpg",
            titulo: "Pijama Negra - Satín y encaje",
            descripcion: "Precio: $35.000",
            referencia: "Referencia 06LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06LF",
          },
          {
            image: "https://i.ibb.co/b2dqDVP/12.jpg",
            titulo: "Tangas",
            descripcion: "Precio: $8.000",
            referencia: "Referencia 07LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07LF",
          },
          {
            image: "https://i.ibb.co/0DZFNWk/11.jpg",
            titulo: "Cacheteros de encaje",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 08LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia08LF",
          },
          {
            image: "https://i.ibb.co/gTQRfHw/09.jpg",
            titulo: "Tangas de encaje",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 09LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia09LF",
          },
          {
            image: "https://i.ibb.co/0QxKHP4/10.jpg",
            titulo: "Tangas",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 10LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia10LF",
          },
          {
            image: "https://i.ibb.co/2PBxmCr/08.jpg",
            titulo: "Tangas de tiras",
            descripcion: "Precio: $15.000",
            referencia: "Referencia 11LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia11LF",
          },
          {
            image: "https://i.ibb.co/yQ1Kg6m/07.jpg",
            titulo: "Tanga de encaje",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 12LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia12LF",
          },
          {
            image: "https://i.ibb.co/F4vdh0s/06.jpg",
            titulo: "Tanga de encaje",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 13LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia13LF",
          },
          {
            image: "https://i.ibb.co/qkPh30c/05.jpg",
            titulo: "Tanga",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 14LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia14LF",
          },

          {
            image: "https://i.ibb.co/WxTbc8q/04.jpg",
            titulo: "Tanga de 3 tiras",
            descripcion: "Precio: $15.000",
            referencia: "Referencia 16LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia16LF",
          },
          {
            image: "https://i.ibb.co/2cqZr24/03.jpg",
            titulo: "Cachetero",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 17LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia17LF",
          },
          {
            image: "https://i.ibb.co/rksy1vJ/01.jpg",
            titulo: "Tanga de encaje",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 18LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia18LF",
          },
          {
            image: "https://i.ibb.co/VgFN4mR/02.jpg",
            titulo: "Tangas",
            descripcion: "Precio: $10.000",
            referencia: "Referencia 19LF",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia19LF",
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

export default LenceriaFList;
