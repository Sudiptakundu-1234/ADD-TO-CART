import { createContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";

export const contextCreate = createContext();

const initialState = {
  cartData: [],
  items: 0,
  amount: 0,
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addData = (index) => {
    dispatch({ type: "ADD", payload: index });
  };

  const deleteItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (price) => {
    dispatch({ type: "INCREASE", payload: price });
  };
  const decrease = (price) => {
    dispatch({ type: "DECREASE", payload: price });
  };


  return (
    <contextCreate.Provider value={{ ...state, addData, deleteItem,increase,decrease }}>
      {props.children}
    </contextCreate.Provider>
  );
};
