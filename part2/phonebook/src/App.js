import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  

  const addName = (event) => {
    event.preventDefault();
    const personName = persons.map((person) => person.name);
    for (let i = 0; i < personName.length; i++) {
      if (personName[i] === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filtered = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filtered);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h3>Add a new</h3>
      <form>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button onClick={addName} type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
