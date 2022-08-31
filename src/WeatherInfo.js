import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
return (
  <div className="WeatherInfo">
    <div className="row">
      <div className="col-md-6">
        <h1 className="city-name pt-1" id="city-name">
          {props.data.city}, {props.data.countryCode}
        </h1>
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          id="icon-head"
          className="icon-head"
        />
<WeatherTemperature celsius={props.data.temperature} />
        
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
  </div>
);

} 