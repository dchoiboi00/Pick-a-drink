import React from "react";
import { Link } from "react-router-dom";
import Drink from "../Drink";
import { useGlobalContext } from "../context";
import drinksData from "../drinksData";

function eucDistance(a, b) {
  return (
    a
      .map((x, i) => Math.abs(x - b[i]) ** 2) // square the difference
      .reduce((sum, now) => sum + now) ** // sum
    (1 / 2)
  );
}

const Result = () => {
  const { choiceVector } = useGlobalContext();
  const distanceVector = [];
  drinksData.map((drink) => {
    let d = eucDistance(choiceVector, drink.choiceVector);
    distanceVector.push(d);
  });
  const index = distanceVector.indexOf(Math.min(...distanceVector));

  return (
    <section className="result">
      <div className="result-container">
        <h1>The drink for you is</h1>
        <Drink id={index + 1} />
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Result;
