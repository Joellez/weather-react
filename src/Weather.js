import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="city-name pt-1" id="city-name">
            London
          </h1>
          <img src="" alt=" " id="icon-head" />

          <span className="temperature" id="temp-number">
            {12}
          </span>
          <span>
            <a
              href="https//www.google.com"
              className="cTemp temperature active"
              id="c-temp"
            >
              °c
            </a>
          </span>
          <span class=" temperature">|</span>
          <span>
            {" "}
            <a
              href="https//www.google.com"
              className="fTemp temperature"
              id="f-temp"
            >
              °f
            </a>
          </span>
        </div>
        <div className="col-6">
          <div className="time" id="time">
            4:30PM
          </div>
          <br />
          <div className="date" id="date">
            Wednesday 30th March 2022
          </div>
          <span className="wind-speed more-weather">Wind speed:</span>
          <span
            className="wind-speed-answer more-weather"
            id="wind-speed-answer"
          >
            {" "}
          </span>
          <br />
          <span className="humidity more-weather">Humidity:</span>
          <span className="humidity-answer more-weather" id="humidity-answer">
            {" "}
          </span>
        </div>
      </div>
    </div>
  );
}
