import React from "react";

const Weather = ({ weathers }) => (
  <>
    {weathers && (
      <div>
        <h2>Weather in {weathers?.location.name}</h2>
        <div >
          <span ><strong>Temperature: </strong></span>
          <span>{weathers?.current.temperature} &deg; Celsius</span>
        </div>
        <div>
          <img
            src={weathers?.current.weather_icons[0]}
            alt="weather data"
          />
        </div>
        <div>
          <span ><strong>Wind: </strong></span>
          <span>{weathers?.current.wind_speed} mph </span>
          <span>direction {weathers?.current.wind_dir}</span>
        </div>
      </div>
    )}
  </>
);

export default Weather;
