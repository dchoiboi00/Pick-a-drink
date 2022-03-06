import React, { useState, useContext, useReducer, useEffect } from "react";

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error("No matching action type");
  }
};

const initialState = {
  choiceVector: {},
  drink: null,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
