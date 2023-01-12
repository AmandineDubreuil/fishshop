
# FishShop

E-shop for selling ornamental fishes created with React Js during my classroom "Developper Web and Mobile Web" in January 2023.

Created for a project, without commercial use.

Texts and images from https://www.floraquatic.com/


## Screenshots

![App Screenshot](https://zupimages.net/up/23/02/afct.jpg)

![App Screenshot](https://zupimages.net/up/23/02/mqnj.png)


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

I only have created the articles sheet and the cart modal. The other components are not created yet.

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
          <div className="prix">{props.data.price} € TTC</div>

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
```



## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@AmandineDubreuil](https://www.github.com/AmandineDubreuil)

