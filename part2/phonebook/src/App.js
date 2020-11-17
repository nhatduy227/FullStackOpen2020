import React, { useState, useEffect } from "react";
import personService from "./service/service";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [notificationMessage, setNotificationMessage] = useState(null);

  // fetch data once web page started
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
    console.log("numbers updated");
  }, []);

  // Utils functions
  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    // Name is blank -> do nothing
    if (newName === "") {
      return;
    }

    if (newNumber.length < 8) {
      setNotificationMessage({
        error: `${newNumber} is too short, please provide a number with at least 8 digits`,
      });
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
      return;
    }

    // Update number
    const personName = persons.map((person) => person.name);
    const personNumber = persons.map((person) => person.number);
    const personID = persons.map((person) => person.id);
    for (let i = 0; i < personName.length; i++) {
      if (personName[i] === newName && personNumber[i] === newNumber) {
        alert(`${newName} is already added to phonebook`);
        return;
      } else if (personName[i] === newName && personNumber[i] !== newNumber) {
        const confirm = window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        );
        if (confirm) {
          personService.update(personID[i], nameObject).then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== personID[i] ? person : response.data
              )
            );
            setNotificationMessage({
              notification: `Updated number for ${newName}`,
            });
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setNotificationMessage({
              error: `Information for ${newName} has already been removed from server`,
            });
            setPersons(persons.filter((p) => p.id !== personID[i]));
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
          });
          return;
        } else {
          console.log("Cancel clicked");
          return;
        }
      }
    }
    personService.create(nameObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
    setNotificationMessage({
      notification: `${newName} added to database`,
    });
    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
    return;
  };
  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personService.remove(id).then(() => {
        //Update state --> filter out deleted person
        const filteredPersons = persons.filter((person) => person.id !== id);
        setPersons(filteredPersons);

        // reset filter
        setFilter("");
      });
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(filtered);
  };

  // Html front-end
  return (
    <main className="container">
      <h2>Phonebook</h2>
      <Notification
        message={
          notificationMessage?.notification || notificationMessage?.error
        }
        className={notificationMessage?.notification ? "notification" : "error"}
      />
      <div>
        Filter shown with{" "}
        <input value={filter} className="input" onChange={handleFilterChange} />
      </div>
      <h3>Add a new</h3>
      <form>
        <div>
          Name:{" "}
          <input
            className="input"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number:{" "}
          <input
            value={newNumber}
            className="input"
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button className="button submit" onClick={addName} type="submit">
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons
        filter={filter}
        persons={persons}
        filteredPersons={filteredPersons}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default App;
