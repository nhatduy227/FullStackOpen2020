import React from "react";

const Country = ({ country, handleClick }) => {
  return (
    <div>
      {country.name}
      <button onClick={() => handleClick(country.name)}>Show</button>
    </div>
  );
};

export default Country;
