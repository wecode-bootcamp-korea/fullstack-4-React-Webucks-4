import React from "react";
const CoffeeCard = (props) => {
  return (<li class="coffee-list">
  <div class="coffee-image-box">
      <img class="coffee-image" src={props.imageUrl} alt={props.coffeeName} />
  </div>
  <h3 class="coffee-name">
      {props.coffeeName}
  </h3>
</li>);
};

export default CoffeeCard;
