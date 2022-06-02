import "../styles/ForecastCard/ForecastCard.scss";

import React from "react";

function ForecastCard({ date, min, max, icon }) {
  return (
    <div className="card">
      <h5 className="date">{date}</h5>
      <img className="icon" src={icon} alt="weather icon" />
      <div className="weather_min_max_container">
        <p>{min}°C</p>
        <p>{max}°C</p>
      </div>
    </div>
  );
}

export default ForecastCard;
