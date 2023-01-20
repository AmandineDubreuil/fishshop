import React from "react";
import BoutiqueContext from "../../BoutiqueContext";
import "./Register.css";

function Register(props) {
  const boutiqueContext = React.useContext(BoutiqueContext);

  return (
    <div className="backRegister">
      <div className="register">
        <div
          className="closeRegister"
          onClick={() => {
            boutiqueContext.handleDisplayFrame("Connexion");
          }}
        >
          X
        </div>
        <h2>Création de compte</h2>
        <form
          action="mailto:amandine.dubreuil@hotmail.com"
          method="post"
          name="registrationForm"
        >
          <div className="nomPrenom">
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="Nom"
              autoComplete="username"
            />
            <input type="text" name="prenom" id="prenom" placeholder="Prénom" />
          </div>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            autoComplete="email"
          />
          <div className="pwdGroup">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de Passe"
              autoComplete="new-password"
            />
            <p>
              Votre mot de passe doit contenir entre 8 et 16 caractères,
              comprenant au moins 1 minuscule, 1 majuscule, 1 chiffre et 1
              caractère spécial.
            </p>
            <input
              type="password"
              name="confpassword"
              id="confpassword"
              placeholder="Confirmation du Mot de Passe"
              autoComplete="new-password"
            />
          </div>
          <div className="cguGroup">
            <input type="checkbox" name="cgu" id="cgu" />
            <label htmlFor="cgu">
              En cochant cette case, je déclare avoir pris connaissance des{" "}
              <a href="">conditions générales d'utilisation</a> du site, et des{" "}
              <a href="">conditions générales de vente</a> de Fish Shop et les
              accepter.
            </label>
          </div>
          <div className="submit">
            <input type="submit" value="S'enregistrer" name="submited" />
          </div>
        </form>
        <p className="signIn">
          Vous possedez déjà un compte ? <a href="">Connectez-vous ici</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
