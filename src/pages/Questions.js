import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import questionData from "../questionData";
const Questions = () => {
  const context = useGlobalContext();
  const { id } = useParams();
  const question = questionData.find((item) => item.id === parseInt(id));
  return (
    <div className="">
      <h1>{question.question}</h1>
      {question.options.map((option, index) => {
        return (
          <Link to={`/questions/${parseInt(id) + 1}`}>
            <button className="btn btn-primary" key={index}>
              {option}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Questions;
