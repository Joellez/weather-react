   import React from "react";

   export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature=Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
let date = new Date(props.data.dt *1000);
let day =date.getDay();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"]
return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            {" "}
            <img
             src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              className="five-day-icons"
              alt={props.data.weather[0].description}
            ></img>
            <div className="weather-forecast-day">{day()}</div>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-max-temp">
                {maxTemperature()}{" "}
              </span>
              <span className="weather-forecast-min-temp">
                {" "}
                {minTemperature()}
              </span>
            </div>
            </div>
   );
}

   