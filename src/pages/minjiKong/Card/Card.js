import "./Card.scss";

function Card(coffee) {
  return (
    <li className="menu">
      <div className="menu__img">
        <img src={coffee.imgUrl} alt={coffee.name} />
      </div>
      <span className="menu__text">{coffee.name}</span>
    </li>
  );
}

export default Card;
