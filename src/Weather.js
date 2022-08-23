import React from "react";

import Cloud from "./images/cloud.png";
import SingleCloud from "./images/singlecloud.png";
import Sun from "./images/sun.png";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Search">
        <div className="row pb-4">
          <div className="col-md-6">
            <form id="my-form">
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
                />
                <div className="input-group-append" id="form-input">
                  <button type="submit" className="btn btn-light search-button">
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
        <div className="forecast pt-4">
          <div className="row five-day-weather">
            <div className="col-md-2 forecast-info">
              {" "}
              <img
                src={SingleCloud}
                className="five-day-icons"
                alt="single cloud"
              ></img>
              <div className="weather-forecast-day">Saturday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">22° </span>
                <span className="weather-forecast-min-temp">15°</span>
              </div>
            </div>
            <div className="col-md-2 forecast-info">
              <img
                src={SingleCloud}
                className="five-day-icons"
                alt="single cloud"
              ></img>
              <div className="weather-forecast-day">Sunday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">24° </span>
                <span className="weather-forecast-min-temp">16°</span>
              </div>
            </div>
            <div className="col-md-2 forecast-info">
              {" "}
              <img src={Sun} className="five-day-icons" alt="sun"></img>{" "}
              <div className="weather-forecast-day">Monday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">24° </span>
                <span className="weather-forecast-min-temp">18°</span>
              </div>
            </div>
            <div className="col-md-2 forecast-info">
              <img src={Sun} className="five-day-icons" alt="sun"></img>{" "}
              <div className="weather-forecast-day">Tuesday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">25° </span>
                <span className="weather-forecast-min-temp">17°</span>
              </div>
            </div>
            <div className="col-md-2 forecast-info">
              <img
                src={SingleCloud}
                className="five-day-icons"
                alt="single cloud"
              ></img>{" "}
              <div className="weather-forecast-day">Wednesday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">30° </span>
                <span className="weather-forecast-min-temp">19°</span>
              </div>
            </div>
            <div className="col-md-2 forecast-info">
              {" "}
              <img src={Sun} className="five-day-icons" alt="sun"></img>
              <div className="weather-forecast-day">Thursday</div>
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-max-temp">22° </span>
                <span className="weather-forecast-min-temp">18°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
