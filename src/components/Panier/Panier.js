import React from "react";
import BoutiqueContext from "../../BoutiqueContext";
import "./Panier.css";

const Panier = (props) => {
  let qteTmp = 0;
  let qteDisplay;
  const boutiqueContext = React.useContext(BoutiqueContext);
  boutiqueContext.panier.sort();
  if (boutiqueContext.panier.length > 0) {
    return (
      <div className="backPanier">
        {" "}
        {/* stop propagation pour utiliser le display panier dans le back panier */}
        <div className="panier">
          <div
            className="closePanier"
            onClick={() => {
              boutiqueContext.handleDisplayFrame("Panier");
            }}
          >
            X
          </div>
          <h2>FishShop vous remercie pour votre confiance</h2>
          <div className="reassurance">
            <div>
              <i className="fa-solid fa-hand-holding-hand"></i> Protection du
              vivant
            </div>
            <div>
              <i className="fa-solid fa-truck-fast"></i> Livraison rapide et
              soignée
            </div>
            <div>
              <i className="fa-solid fa-lock"></i> Paiement sécurisé
            </div>
          </div>

          <h3>Détails de votre commande</h3>
          <ul>
            {/*Boucle Map sur le panier*/}

            {boutiqueContext.panier.map((value, i) => {
              let article = boutiqueContext.data[value];

              if (value !== boutiqueContext.panier[i + 1]) {
                qteDisplay = qteTmp + 1;
                qteTmp = 0;
                return (
                  <li key={i}>
                    <div className="namePanier">{article.name}</div>
                    <div className="generalQtePanier">
                      <div
                        className="morePanier"
                        onClick={() => boutiqueContext.remove(i, value)}
                      >
                        {" "}
                        -{" "}
                      </div>
                      <div className="qtePanier"> {qteDisplay} </div>

                      {boutiqueContext.data[value].qte > 0 ? (
                        <div
                          className="lessPanier"
                          onClick={() => boutiqueContext.achat(value)}
                        >
                          {" "}
                          +{" "}
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className="priceUnPanier">
                        {" "}
                        {Math.round(article.price*100)/100} € TTC{" "}
                      </div>
                      <div className="priceTotLiPanier">
                        {" "}
                        {(Math.round((article.price * qteDisplay)*100)/100)} € TTC{" "}
                      </div>

                      <div className="removePanier"> {/*onClick={boutiqueContext.removeAll(value)} */}
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </li>
                );
              } else {
                qteDisplay = qteTmp + 1;

                qteTmp++;
              }

              //console.dir(boutiqueContext.data[value]);
            })}
          </ul>
          <div className="totalPanier">
            Total : {(Math.round(boutiqueContext.totalPanier*100)/100)} € TTC
          </div>
          <button className="buttonPanier">Valider la commande</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="backPanier">
        {/* stop propagation pour utiliser le display panier dans le back panier */}
        <div className="panier">
          <div
            className="closePanier"
            onClick={() => {
              boutiqueContext.handleDisplayFrame("Panier");
            }}
          >
            X
          </div>
          <h2>FishShop vous remercie pour votre confiance</h2>
          <div className="reassurance">
            <div>
              <i className="fa-solid fa-hand-holding-hand"></i> Protection du
              vivant
            </div>
            <div>
              <i className="fa-solid fa-truck-fast"></i> Livraison rapide et
              soignée
            </div>
            <div>
              <i className="fa-solid fa-lock"></i> Paiement sécurisé
            </div>
          </div>

          <h3>Détails de votre commande</h3>
          <ul>
            {" "}
            <li>Votre panier est vide !</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Panier;
