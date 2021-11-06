const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todos = {
  Peter: ["boop to music", "something interesting"],
  Tara: ["Say hello", "boop to music"],
};
/*
S1: Return an array of strings for the GET /todos endpoint
S2: Add an endpoint to allow the addition of a new todo ({value:"text for the todo"}) for the POST /todos endpoint
S3: Add a GET todos/:name endpoint with a route parameter to allow different todo lists with different names
S4: Add a POST todos/:name endpoint to allow posting of a new todo to different todo lists with different names
*/

app.get("/todos", (request, response) => {
  response.status(200).send([]);
});

app.get("/todos/:name", (request, response) => {
  if(!todos[request.params.name]){
    return response.send([]);
  }else {
  response.status(200).send(todos[request.params.name]);
  }
});

app.post("/todos/:name", (request, response) => {
  const name = request.params.name;
  const newTodo = request.body.value;
  if (todos[name] === undefined) {
    todos[name] = [];
  }
  todos[name].push(newTodo);
  response.status(201).send();
});

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
