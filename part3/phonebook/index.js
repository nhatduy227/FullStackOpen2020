const express = require("express");
const app = express();
var morgan = require("morgan");

// Configure morgan to log body of POST request
morgan.token('person', (req) => {
  if (req.method === 'POST') return JSON.stringify(req.body)
  return null
})

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :person")
);
app.use(express.json());

// Utils function
const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};

const randomID = () => {
  const randID = Math.floor(Math.random() * 100) + 4; // returns a random integer from 4 to 104
  return randID;
};

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(requestLogger);

// json database
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "267-345101",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>This is a phonebook</h1>");
});

app.get("/info", (request, response) => {
  response.send(`<h1>
  <span>Phonebook has info for ${generateId() - 1} people</span></h1>
  <span>Current Date: ${new Date().toString()}</span>`);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).send({ error: "unknown endpoint" });
  }
});

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(unknownEndpoint);

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  // logic to check if name is repeat
  const personInDB = persons.map((person) => person.name);

  if (!body.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number is missing",
    });
  }
  for (var i = 0; i < personInDB.length; i++) {
    if (personInDB[i] === body.name) {
      return response.status(400).json({
        error: "name must be unique",
      });
    }
  }

  const person = {
    id: randomID(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
