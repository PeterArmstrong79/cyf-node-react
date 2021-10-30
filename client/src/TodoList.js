import React, { useState, useEffect } from "react";

const SERVER = "//localhost:4000";

function TodoList(props) {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState(null);

  useEffect(() => {
    console.log("fetching for " + props.name);
    fetch(`//localhost:4000/todos/${props.name}`)
      .then((res) => res.json())
      .then((list) => {
        console.log(list);
        setList(list);
      });
  }, [props.name]);

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function handleAdd() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: newItem,
      }),
    };
    fetch(`${SERVER}/todos/${props.name}`, requestOptions).then((response) => {
      console.log("posted", response);
    });

    setList((list) => {
      const newList = list.concat(newItem);
      setNewItem("");
      return newList;
    });
  }

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add an Item"
        value={newItem}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoList;
