import React from "react";
import Country from "./Country";
import CountryDetail from "./CountryDetail";

const Countries = ({ countries, weathers, handleClick }) => {
  if (countries.length > 10) {
    return (
      <div>
        <span>Too many matches, specify another filter.</span>
      </div>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        {countries.map((country) => (
          <Country handleClick={handleClick} country={country} />
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map((country) => (
          <CountryDetail 
          weathers={weathers}
          country={country} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Countries;
