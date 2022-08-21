import React from "react";
import Cloud from "./images/cloud.png";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-md-6">
          <h1 className="city-name pt-1" id="city-name">
            London, GB
          </h1>
          <img
            src={Cloud}
            alt="weather icon"
            id="icon-head"
            className="icon-head"
          />

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
          <hr className="hr-1" />
          <div class="weather-description">{"Overcast Clouds"}</div>
        </div>
        <div className="col-md-6">
          <div className="date-time">
            <div className="time" id="time">
              16:30
            </div>
            <br />
            <div className="date" id="date">
              Friday 30th <span className="month-year">March 2022</span>
              <br />
              <br />
              <hr className="hr-2" />
            </div>
          </div>
          <span className="wind-speed more-weather">Wind speed:</span>
          <span
            className="wind-speed-answer more-weather"
            id="wind-speed-answer"
          >
            {" 3 mph "}
            <span className="wind-speed-km">{"(4 km/h)"}</span>
          </span>
          <br />
          <span className="humidity more-weather">Humidity:</span>
          <span className="humidity-answer more-weather" id="humidity-answer">
            {" 40%"}
          </span>
        </div>
      </div>
    </div>
  );
}
