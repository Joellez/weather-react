import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
   function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
   }
   function showCelsius(event) {
   event.preventDefault();
     setUnit("celsius");
   }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <span className="unit  temperature">
          <span className="active"> °c </span> |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °f
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius *9) /5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit)}</span>
        <span className="unit  temperature">
          <a href="/" onClick={showCelsius}>
            °c{" "}
          </a>
          | <span className="active">°f</span>
        </span>
      </span>
    );
  }
}
