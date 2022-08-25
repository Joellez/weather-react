import React from "react";

export default function FormattedDate(props){
   let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"];
    let day= days[props.date.getDay()];
   let months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
   ]; 
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    
    function dateOrdinal(number) {
      let date = props.date.getDate();
      if (date === 31 || date === 21 || date === 1) return date + "st";
      else if (date === 22 || date === 2) return date + "nd";
      else if (date === 23 || date === 3) return date + "rd";
      else return date + "th";
    }

    let ordinalDate = dateOrdinal();

    let hours = props.date.getHours();
    if (hours < 10) {
     hours = `0${hours}`;
    }
    let minutes =props.date.getMinutes();
    if (minutes <10){
        minutes= `0${minutes}`;
    }

    return (
      <div className="FormattedDate">
        {" "}
        <div className="time">
          {hours}:{minutes}
        </div>
        <br />
        {day} {ordinalDate} {month} {year}
      </div>
    );
}