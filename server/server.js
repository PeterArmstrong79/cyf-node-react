const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let todos = {
  default: ["clean dishes", "get shopping"],
};

app.get("/todos", (request, response) => {
  response.status(200).send(todos.default);
});

app.post("/todos", (request, response) => {
  todos.default.push(request.body.value);
  response.sendStatus(200);
});

app.get("/todos/:name", (request, response) => {
  const name = request.params.name;
  if (todos[name] === undefined) {
    response.status(200).send([]);
  } else {
    response.status(200).send(todos[name]);
  }
});

app.post("/todos/:name", (request, response) => {
  const name = request.params.name;
  todos[name] = todos[name] || [];
  todos[name].push(request.body.value);
  response.sendStatus(200);
});

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
