import { useContext } from "react";
import BoutiqueContext from "../../BoutiqueContext";
import "./Menu.css";


//***2****
function MenuButton(props) {
  // boutiqueContext représente les infos (value) de BoutiqueConcept, pas le composant
  //je lie les 2
  const boutiqueContext = useContext(BoutiqueContext);
//  console.dir(boutiqueContext.panier.length);

  // j'ai besoin de recup le texte de mon lien et son url
  return (
    <li onClick={
      ()=>{
              boutiqueContext.handleDisplayFrame(props.texte);

      }}>
      <a href={props.url}>{props.texte} 
      {props.texte==="Panier" && boutiqueContext.panier.length>0 ? <sup className="pill">{boutiqueContext.panier.length}</sup> : <></>}
      </a>
    </li>
  );
}
export default MenuButton;
