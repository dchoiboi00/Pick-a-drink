import React, { useState, useContext, useReducer, useEffect } from "react";
import questionData from "./questionData";

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHOICE":
      const { id, choice } = action.payload;
      state.choiceVector[id - 1] = choice;
      return state;
    default:
      throw new Error("No matching action type");
  }
};

const initialState = {
  choiceVector: new Array(questionData.length).fill(0),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addChoice = (id, choice) => {
    dispatch({ type: "ADD_CHOICE", payload: { id, choice } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        addChoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
