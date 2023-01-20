import React from "react";
import BoutiqueContext from "../../BoutiqueContext";
import "./Card.css";

function CardButton(props) {
  const boutiqueContext = React.useContext(BoutiqueContext);
  if (boutiqueContext.data[props.id].qte > 0) {
    return (
      <button
        className="boutonCard"
        onClick={() => {
          boutiqueContext.achat(props.id);
        }}
      >
        Buy Now !
      </button>
    );
  } else {
    return <button className="boutonCard">Non disponible</button>
  }
}

export default CardButton;
