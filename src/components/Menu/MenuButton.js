import "./Menu.css";
//***2****
function MenuButton(props) {
  // j'ai besoin de recup le texte de mon lien et son url
  return (
    <li>
      <a href={props.url}>{props.texte}</a>
    </li>
  );
}
export default MenuButton;
