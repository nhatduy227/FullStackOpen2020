import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [weathers, setWeathers] = useState(null);

  // Fetch country data from api
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      if (query !== "") {
        const searchResult = response.data.filter((country) =>
          country.name.toLowerCase().includes(query.toLowerCase())
        );
        setCountries(searchResult);
        console.log(searchResult);
      }
    });
  }, [query]);

  // Fetch weather info from api
  useEffect(() => {
    const baseUrl = "http://api.weatherstack.com/current";
    const ACCESS_KEY = process.env.REACT_APP_API_KEY;
    if (countries.length === 1) {
      const capital = countries.map((country) => country.capital);
      if (capital[0]) {
        axios
          .get(`${baseUrl}?access_key=${ACCESS_KEY}&query=${capital[0]}`)
          .then((response) => {
            setWeathers(response.data);
          });
      }
    }
  }, [countries]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  const handleClick = (countryName) => {
    setQuery(countryName);
  };

  return (
    <div>
      <h2>Countries Info</h2>
      <div>
        Find Countries <input value={query} onChange={handleSearchChange} />
      </div>
      <Countries 
      weathers={weathers}
      handleClick={handleClick} countries={countries} />
    </div>
  );
};

export default App;
