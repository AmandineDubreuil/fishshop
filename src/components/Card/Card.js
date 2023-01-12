import CardButton from "./CardButton";
import "./Card.css";

function Card(props) {
  //console.dir(props);
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

export default Card;
