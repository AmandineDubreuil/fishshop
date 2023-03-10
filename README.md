
# FishShop

Responsive E-shop to sell ornamental fishes created with React Js during my  "Developper Web and Mobile Web" training in January 2023.

Menu, Item cards, Register form, Cart 

Created for a project, without commercial use.

Texts and images from https://www.floraquatic.com/


## Screenshots

![App Screenshot](https://zupimages.net/up/23/02/afct.jpg)

![App Screenshot](https://zupimages.net/up/23/02/mqnj.png)

![App Screenshot](https://i.ibb.co/85c2GDx/register.png)


## Installation

Copy the project from the link below :
https://github.com/AmandineDubreuil/fishshop

Unzip it in your working folder.

Install with the command below :

```bash
  npm update
  cd fishshop
```

```bash
  npm start
  
```

    
## Tech Stack

**Client:** ReactJS, JavaScript, HTML, CSS

**Server:** NodeJS


## Usage/Examples


- Menu creation
![App Screenshot](https://zupimages.net/up/23/02/oxwf.png)

```javascript
import MenuButton from "./MenuButton";
import "./Menu.css";

class MenuEntries {
  constructor(text, url) {
    this.text = text;
    this.url = url;
  }

  text = "";
  url = "";
}

//***3****
const menuContent = [
  new MenuEntries("Home", "https://github.com/"),
  new MenuEntries(
    "Poissons",
    "https://www.figma.com/"
  ),
  new MenuEntries("Crevettes", "https://www.frontendmentor.io/"),
  new MenuEntries("Panier", "https://github.com/"),
];
console.dir(menuContent);

//***4****
function displayMenu() {
  document.querySelector(".innerMenu").classList.toggle("dNone");
  document.querySelector(".innerMenu").classList.toggle("dBlock");
}
//***1****
function Menu() {
  return (
    <div id="navbar">
      <div className="logo"><span className="fish"> Fish</span>Shop</div>
      <ul className="innerMenu dNone">
        {/** boucle dans mon JSX pour afficher autant de boutons de menu que ce qu'il
          y a dans le tableau menuContent */}

        {
          /** utilise ***3*** */
          menuContent.map((value) => {
           
            /** utilise ***2*** dans MenuButton*/
            return <MenuButton texte={value.text} url={value.url} />;
          })
        }
      </ul>
      {/** utilise ***4*** */}
      <div className="burger" onClick={displayMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="cartMenu"><i className="fa-solid fa-cart-shopping"></i></div>
    </div>
  );
}

```

- Register form 

![App Screenshot](https://i.ibb.co/85c2GDx/register.png)

```javascript
function Register(props) {
  return (
    <div className="backRegister">
      <div className="register">
        <div className="closeRegister">X</div>
        <h2>Cr??ation de compte</h2>
        <form
          action="mailto:amandine.dubreuil@hotmail.com"
          method="post"
          name="registrationForm"
        >
          <div className="nomPrenom">
            <input type="text" name="nom" id="nom" placeholder="Nom" />
            <input type="text" name="prenom" id="prenom" placeholder="Pr??nom" />
          </div>

          <input type="email" name="email" id="email" placeholder="E-mail" />
          <div className="pwdGroup">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de Passe"
            />
            <p>
              Votre mot de passe doit contenir entre 8 et 16 caract??res,
              comprenant au moins 1 minuscule, 1 majuscule, 1 chiffre et 1
              caract??re sp??cial.
            </p>
            <input
              type="password"
              name="confpassword"
              id="confpassword"
              placeholder="Confirmation du Mot de Passe"
            />
          </div>
          <div className="cguGroup">
            <input type="checkbox" name="cgu" id="cgu" />
            <label for="cgu">
              En cochant cette case, je d??clare avoir pris connaissance des{" "}
              <a href="">conditions g??n??rales d'utilisation</a> du site, et des{" "}
              <a href="">conditions g??n??rales de vente</a> de Fish Shop et les
              accepter.
            </label>
          </div>
          <div              className="submit"
>
            <input
              type="submit"
              value="S'enregistrer"
              name="submited"
            />
          </div>
        </form>
        <p className="signIn">
          Vous possedez d??j?? un compte ? <a href="">Connectez-vous ici</a>
        </p>
      </div>
    </div>
  );
}


```


- Creation of a card (ornamental fish) with image, description and price
![App Screenshot](https://zupimages.net/up/23/02/pewr.png)

```javascript

import CardButton from "./CardButton";
import "./Card.css";

function Card(props) {

  return (
    <div className="card">
      <div className="imgCard">
        <img src={props.data.url} alt="" />
      </div>
      <div>
        <div className="name">{props.data.name}</div>
        <div className="description">{props.data.description}</div>
        <div className="qte">
          Attention ! plus que {props.data.qte} exemplaires en stock
        </div>
        <div className="buttonCardPrix">
          <div className="prix">{props.data.price} ??? TTC</div>

          <div className="buttonCard">
            <CardButton qte={props.data.qte}></CardButton>
          </div>
        </div>
      </div>
    </div>
  );
}

```

- Display products
![App Screenshot](https://zupimages.net/up/23/02/dwtd.png)


```javascript
import Card from "../Card/Card";
import "./CardFrame.css";

function CardFrame(props) {
  return (
    <div className="cardFrame">
      {props.data.map((value) => {
        return <Card data={value} />;
      })}
    </div>
  );
}
```

- Cart Modal 

![App Screenshot](https://zupimages.net/up/23/02/411e.png)

```javascript
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
              soign??e
            </div>
            <div>
              <i className="fa-solid fa-lock"></i> Paiement s??curis??
            </div>
          </div>

          <h3>D??tails de votre commande</h3>
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
                        {Math.round(article.price*100)/100} ??? TTC{" "}
                      </div>
                      <div className="priceTotLiPanier">
                        {" "}
                        {(Math.round((article.price * qteDisplay)*100)/100)} ??? TTC{" "}
                      </div>

                      <div className="removePanier"> 
                        <i className="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </li>
                );
              } else {
                qteDisplay = qteTmp + 1;

                qteTmp++;
              }

              
            })}
          </ul>
          <div className="totalPanier">
            Total : {(Math.round(boutiqueContext.totalPanier*100)/100)} ??? TTC
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
              soign??e
            </div>
            <div>
              <i className="fa-solid fa-lock"></i> Paiement s??curis??
            </div>
          </div>

          <h3>D??tails de votre commande</h3>
          <ul>
            {" "}
            <li>Votre panier est vide !</li>
          </ul>
        </div>
      </div>
    );
  }
};

```



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@AmandineDubreuil](https://www.github.com/AmandineDubreuil)

