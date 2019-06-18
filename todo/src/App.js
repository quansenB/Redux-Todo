import React from "react";
import { connect } from "react-redux";
import "./App.css";
import styled from "styled-components";
import { addToDo, markAsCompleted } from "./index.js";

const Div = styled.div`
  text-decoration: "line-through";
`;

function App() {
  return (
    <div className="App">
      {props.toDos.map(toDo =>
        toDo.completed ? (
          <Div onClick={props.markAsCompleted}>{toDo.value}</Div>
        ) : (
          <div onClick={props.markAsCompleted}>{toDo.value}</div>
        )
      )}
      <form onSubmit={props.addToDo}>
        <input type="text" placeholder="New ToDo..." />
        <input type="Submit" value="submit" />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos
  };
}

export default connect(
  mapStateToProps,
  { addToDo, markAsCompleted }
)(App);
