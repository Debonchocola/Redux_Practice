import { createStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counteReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "increse") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if ((action.type = "toggle")) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counteReducer);

export default store;
