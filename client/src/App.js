import "./App.css";
import TodoList from "./TodoList.js";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("default");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <header>
        TodoList for <input type="text" value={name} onChange={handleChange} />
      </header>
      <TodoList name={name} />
    </div>
  );
}

export default App;
