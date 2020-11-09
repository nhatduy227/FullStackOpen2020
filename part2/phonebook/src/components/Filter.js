import React, { useState } from "react";

const Filter = (props) => {
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(props.persons);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filtered = props.persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(filtered);
  };
  return (
    <div>
      Filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
