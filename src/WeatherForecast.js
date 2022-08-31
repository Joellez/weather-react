import React from "react";

import  "./WeatherForecast.css"

import SingleCloud from "./images/singlecloud.png";
import Sun from "./images/sun.png";

export default function WeatherForecast(){
return ( // loop through 1 day 5 times when integrate with API instead of repeating code
  <div className="WeatherForecast">
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