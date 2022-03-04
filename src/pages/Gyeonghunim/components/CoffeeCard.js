import React from "react";
const CoffeeCard = (props) => {
  return (<li className="coffee-list">
  <div className="coffee-image-box">
      <img className="coffee-image" src={props.imageUrl} alt={props.coffeeName} />
  </div>
  <h3 className="coffee-name">
      {props.coffeeName}
  </h3>
</li>);
};

export default CoffeeCard;
