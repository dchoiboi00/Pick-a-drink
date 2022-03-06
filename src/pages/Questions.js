import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import questionData from "../questionData";
const Questions = () => {
  const { choiceVector, addChoice } = useGlobalContext();
  const { id } = useParams();
  const question = questionData.find((item) => item.id === parseInt(id));
  const nextID = parseInt(id) + 1;
  return (
    <div className="">
      <h1>Question {id}</h1>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => {
        return (
          <Link
            to={
              nextID <= questionData.length ? `/questions/${nextID}` : "/result"
            }
            key={index}
          >
            <button
              className="btn btn-primary"
              onClick={() => addChoice(id, index)}
            >
              {option}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Questions;
