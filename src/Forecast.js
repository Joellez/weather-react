import React from "react";

import "./Forecast.css";
import SingleCloud from "./images/singlecloud.png";
import Sun from "./images/sun.png";

export default function Forecast() {
  return (
    <div className="Forecast pt-4">
      <div className="row five-day-weather">
        <img
          src={SingleCloud}
          className="five-day-icons"
          alt="single cloud"
        ></img>
        <img
          src={SingleCloud}
          className="five-day-icons"
          alt="single cloud"
        ></img>

        <img src={Sun} className="five-day-icons" alt="sun"></img>
        <img src={Sun} className="five-day-icons" alt="sun"></img>
        <img
          src={SingleCloud}
          className="five-day-icons"
          alt="single cloud"
        ></img>
        <img src={Sun} className="five-day-icons" alt="sun"></img>
      </div>
    </div>
  );
}
