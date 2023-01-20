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
  new MenuEntries("Poissons"),
  new MenuEntries("Crevettes"),
  new MenuEntries("Connexion"),
  new MenuEntries("Panier"),
];
//console.dir(menuContent);

//***4****
function displayMenu() {
  document.querySelector(".innerMenu").classList.toggle("dNone");
  document.querySelector(".innerMenu").classList.toggle("dBlock");
}
//***1****
function Menu(props) {
  return (
    <div id="navbar">
      <div className="logo">
        <span className="fish"> Fish</span>Shop
      </div>
      <ul className="innerMenu dNone">
        {/** boucle dans mon JSX pour afficher autant de boutons de menu que ce qu'il
          y a dans le tableau menuContent */}

        {
          /** utilise ***3*** */
          menuContent.map((value, i) => {
            /* pour retourner à nouveau du JSX je dois dans ma fonction
          callback utiliser un return*/

            /** utilise ***2*** dans MenuButton*/
            return <MenuButton key={i} texte={value.text} url={value.url} />;
          })
        }
      </ul>
      {/* attention dans un event l'utilisation de parenthèses à la suite
      de ma fonction déclenche cette fonction à l'ouverture du document
      il faut donc les retirer */
      /** utilise ***4*** */}
      <div className="burger" onClick={displayMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="cartMenu">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
}

export default Menu;
