import './Panier.css'
const Panier = (props) => {
  return (
    <div className="backPanier">
      <div className="panier">
        <div className="closePanier">X</div>
        <h2>FishShop vous remercie pour votre confiance</h2>
        <div className="reassurance">
        <div>
          <i className="fa-solid fa-hand-holding-hand"></i> Protection du vivant
        </div>
        <div>
          <i className="fa-solid fa-truck-fast"></i> Livraison rapide et soignée
        </div>
        <div><i className="fa-solid fa-lock"></i> Paiement sécurisé</div>
      </div>

        <h3>Détails de votre commande</h3>
        <ul>{/*Boucle Map sur le panier*/}
        <li>
          
            <div className="namePanier">nom de l'article{}</div>
            <div className="generalQtePanier">
                <div className="morePanier"> + </div>
                <div className="qtePanier"> qté{} </div>
                <div className="lessPanier"> - </div>
                <div className="pricePanier"> {} € TTC </div>
                <div className="removePanier"><i className="fa-solid fa-trash"></i></div>
            </div>
        </li>
        </ul>
        <div className="totalPanier">Total : {} € TTC</div>
        <button className="buttonPanier">Valider la commande</button>

      </div>
    </div>
  );
};

export default Panier;
