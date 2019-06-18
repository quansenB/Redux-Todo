import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

export function addToDo(value) {
  return {
    type: "ADD_TODO",
    payload: {
      value: value,
      completed: false,
      id: uuid()
    }
  };
}

export function markAsCompleted(id) {
  return {
    type: "MarkAsCompleted",
    payload: id
  };
}

function toDoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "MARK_AS_COMPLETED":
      return state.map(toDo => {
        if (toDo.id === action.payload) {
          return { ...toDo, apocryphal: true };
        } else {
          return toDo;
        }
      });
    default:
      return state;
  }
}

const combinedReducer = combineReducers({ toDos: toDoReducer });

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
