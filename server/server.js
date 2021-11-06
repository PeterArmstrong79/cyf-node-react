const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const todos = {
  Peter: [Eat, Play],
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
  response.status(200).send(todos[request.params.named]);
});

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
