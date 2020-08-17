import React from "react";
import "../styles/CardStyle.css";
class Cards extends React.Component {
  render() {
    return (
      <div className="main">
        <ul className="cards">
          {this.props.cards.map((cards, tarjeta) => {
            return (
              <li className="cards_item" key={tarjeta}>
                <div className="card">
                  <div className="card_image">
                    <img src={cards.image} alt="imagenxd" loading="lazy" />
                  </div>
                  <div className="card_content">
                    <h3 className="card_title"> {cards.titulo} </h3>
                    <p className="card_text">{cards.descripcion}</p>
                    <a href={cards.link} className="hipervinculo">
                      <button class="boton_card card_btn">
                        {cards.referencia}
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cards;
