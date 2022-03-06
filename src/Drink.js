import React from "react";
import drinksData from "./drinksData";

const Drink = ({ id }) => {
  const drink = drinksData.find((drink) => drink.id === id);
  return (
    <div className="drink">
      <img src={drink.img} alt="drink image" />
      <h2>{drink.name}</h2>
    </div>
  );
};

export default Drink;
