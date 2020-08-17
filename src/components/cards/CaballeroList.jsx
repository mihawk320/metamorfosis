import React from "react";

import Cards from "./Card";

class CaballeroList extends React.Component {
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
            image: "https://i.ibb.co/3WJ7Tk4/10.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 01C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia01C",
          },
          {
            image: "https://i.ibb.co/Km0fGTf/09.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 02C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia02C",
          },
          {
            image: "https://i.ibb.co/HpLzcYY/08.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 03C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia03C",
          },
          {
            image: "https://i.ibb.co/dmtk24m/07.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 04C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia04C",
          },
          {
            image: "https://i.ibb.co/nQDTnJt/06.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 05C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia05C",
          },
          {
            image: "https://i.ibb.co/GVSHyJZ/05.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 06C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia06C",
          },
          {
            image: "https://i.ibb.co/KWhfTkc/04.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 07C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia07C",
          },
          {
            image: "https://i.ibb.co/M78L36g/03.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 08C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia08C",
          },
          {
            image: "https://i.ibb.co/fqyQQQm/01.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 09C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia09C",
          },
          {
            image: "https://i.ibb.co/t8658sz/02.jpg",
            titulo: "Pantaloneta caballero",
            descripcion: "Precio: $10.000 en diferentes tallas",
            referencia: "Referencia 10C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia10C",
          },

          {
            image: "https://i.ibb.co/zNy6pfF/05.jpg",
            titulo: "Camibuso Negro",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 11C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia11C",
          },
          {
            image: "https://i.ibb.co/rvkvLpd/04.jpg",
            titulo: "Camibuso Azul",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 12C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia12C",
          },
          {
            image: "https://i.ibb.co/s9fz59r/03.jpg",
            titulo: "Camibuso Gris oscuro",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 13C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia13C",
          },
          {
            image: "https://i.ibb.co/0tR1xFK/01.jpg",
            titulo: "Camibuso Azul claro",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 14C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia14C",
          },
          {
            image: "https://i.ibb.co/p1HQgkN/02.jpg",
            titulo: "Camibuso Gris",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 15C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia15C",
          },
          {
            image: "https://i.ibb.co/KWdw51Z/06.jpg",
            titulo: "Camibuso Rojo",
            descripcion: "Precio: $20.000 en diferentes tallas",
            referencia: "Referencia 16C",
            link:
              "https://api.whatsapp.com/send?phone=573007657614&text=Referencia16C",
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

export default CaballeroList;
