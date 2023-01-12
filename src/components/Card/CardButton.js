import "./Card.css";


function CardButton(props) {
    return (
      <button className="boutonCard">
        Buy <span>{props.qte}</span> Now !
      </button>
    );
  }

  export default CardButton