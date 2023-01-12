import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="reassurance">
        <div>
          <i className="fa-solid fa-hand-holding-hand"></i> Protection du vivant
        </div>
        <div>
          <i className="fa-solid fa-truck-fast"></i> Livraison rapide et soignée
        </div>
        <div><i className="fa-solid fa-lock"></i> Paiement sécurisé</div>
      </div>
      <div className="foot">
        <div className="siteMap">
          <div>Accueil</div>
          <div>Poissons</div>
          <div>Crevettes</div>
          <div>Conditions de livraison</div>
        </div>
        <div className="reseaux">
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span> 
          <span> 
             &nbsp;<i className="fa-brands fa-instagram"></i>
          </span>
          <span>
          &nbsp;<i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
