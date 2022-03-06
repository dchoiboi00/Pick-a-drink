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

  const messages = [
    "Cheap and wild",
    "Memorable times with friends",
    "Keep it classy",
  ];

  return (
    <section className="result">
      <h1 className="section-title">The drink for you is</h1>
      <div className="result-container">
        <Drink id={index + 1} />
        <h2 className="result-message">{messages[index]}</h2>
      </div>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

export default Result;
