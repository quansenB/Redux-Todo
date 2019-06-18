import React from "react";
import { connect } from "react-redux";
import "./App.css";
import styled from "styled-components";
import { addToDo, markAsCompleted/* , changeCurrentValue */ } from "./index.js";

const Div = styled.div`
  text-decoration: line-through;
`;


function App(props) {

  let ref = React.createRef();

  const addToDo = (event) => {
    event.preventDefault();
    props.addToDo(ref.current.value);
    ref.current.value="";
  }

  return (
    <div className="App">
      {props.toDos.map(toDo =>
        toDo.completed ? (
          <Div onClick={()=> {props.markAsCompleted(toDo.id)}}>{toDo.value}</Div>
        ) : (
          <div onClick={()=> {props.markAsCompleted(toDo.id)}}>{toDo.value}</div>
        )
      )}
      <form onSubmit={addToDo}>
        <input ref = {ref} value={props.value} type="text" placeholder="New ToDo..." />
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
  { addToDo, markAsCompleted/* , changeCurrentValue */ }
)(App);
