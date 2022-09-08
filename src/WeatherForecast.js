import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import  "./WeatherForecast.css"

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
function handleResponse(response){
  setForecast(response.data.daily);
  setLoaded(true);
}

function load(){
 let apiKey = "97250fbf79d302fc04bf2d8bd6da830f";
 let longitude = props.coordinates.lon;
 let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);}


useEffect(() => {
  setLoaded(false);
  // set loaded to false
}, [props.coordinates])
//if the coordinates change


if (loaded) {
  return (
    // loop through 1 day 5 times when integrate with API instead of repeating code
    <div className="WeatherForecast">
      <div className="forecast pt-4">
        <div className="row five-day-weather">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-md-2 forecast-info" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );

 
} else {
load()
 
 return null;

}


  

}