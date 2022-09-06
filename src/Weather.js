import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import { SpinnerCircularFixed } from "spinners-react";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      countryCode: response.data.sys.country,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "97250fbf79d302fc04bf2d8bd6da830f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <div className="row pb-4">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} id="my-form">
                <div
                  className="input-group mb-3 city-search "
                  id="city-search-form"
                >
                  <input
                    type="text"
                    className="form-control rounded"
                    placeholder="Enter a city"
                    aria-label="City Search"
                    aria-describedby="basic-addon2"
                    autoComplete="off"
                    id="search-bar"
                    onChange={handleCityChange}
                  />
                  <div className="input-group-append" id="form-input">
                    <button
                      type="submit"
                      className="btn btn-light search-button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-light location-button"
                id="location-button"
              >
                Use current location
              </button>
            </div>
          </div>
        </div>
        <div className="card" />
        <div className="card-body pb-4">
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <div className="footnote pt-3">
          <a
            href="https://github.com/Joellez/weather-react"
            className="github-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code{" "}
          </a>
          by{" "}
          <a
            href="https://www.linkedin.com/in/joellezane/"
            className="linkedin-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Joelle Zane
          </a>
        </div>
      </div>
    );
  } else {
    search();
    const style = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    return (
      <div style={style}>
         <SpinnerCircularFixed size={90} thickness={180} speed={100} color="grey" secondaryColor="rgba(255, 255, 255, 1)" />
      </div>
    );
  }
}
