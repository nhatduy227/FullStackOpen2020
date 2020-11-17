import React from "react";
import Weather from "./Weather"

const CountryDetail = ({ country, weathers }) => {
  const languages = country.languages;

  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        <strong>Capital:</strong> {country.capital}
      </div>
      <div>
        <strong>Population:</strong> {country.population}
      </div>
      <h2> Languages </h2>
      {languages.map((language) => (
        <ul>
          <li>
            <strong>{language.name}</strong>
          </li>
        </ul>
      ))}
      <div>
        <img src={country.flag} width="100px" height="100px" alt="Flags" />
      </div>
      <Weather weathers={weathers}/>
    </div>
  );
};

export default CountryDetail;
