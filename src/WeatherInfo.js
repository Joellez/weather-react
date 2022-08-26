import React from "react";
import FormattedDate from "./FormattedDate";

import SingleCloud from "./images/singlecloud.png";
import Sun from "./images/sun.png";

export default function WeatherInfo(props){
return (
  <div className="WeatherInfo">
    <div className="row">
      <div className="col-md-6">
        <h1 className="city-name pt-1" id="city-name">
          {props.data.city}
        </h1>
        <img
          src={props.data.iconUrl}
          alt="weather icon"
          id="icon-head"
          className="icon-head"
        />

        <span className="temperature" id="temp-number">
          {Math.round(props.data.temperature)}
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
        <div class="weather-description text-capitalize">
          {props.data.description}
        </div>
      </div>
      <div className="col-md-6">
        <div className="date-time">
          <div className="date" id="date">
            <FormattedDate date={props.data.date} />
            <br />
            <hr className="hr-2" />
          </div>
        </div>
        <span className="wind-speed more-weather">Wind speed:</span>
        <span className="wind-speed-answer more-weather" id="wind-speed-answer">
          {" "}
          {Math.round(props.data.wind / 1.609)} mph
          <span className="wind-speed-km">
            {" "}
            ({Math.round(props.data.wind)} km/h)
          </span>
        </span>
        <br />
        <span className="humidity more-weather">Humidity:</span>
        <span className="humidity-answer more-weather" id="humidity-answer">
          {" "}
          {props.data.humidity}%
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
);

} 