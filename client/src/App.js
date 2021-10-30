import "./App.css";
import TodoList from "./TodoList.js";
import React from "react";

function App() {
  /*
  Exercise C2.1: Add a name state, controlled by an input box that reads "Todo list for [xxxxxxx]". Pass the name as a prop to TodoList
  */

  return (
    <div className="App">
      <header>TodoList</header>
      <TodoList />
    </div>
  );
}

export default App;
