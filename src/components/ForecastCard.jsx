import React from "react";
import "../styles/ForecastCard/ForecastCard.scss";

function ForecastCard({ date, min, max, icon }) {
  return (
    <div className="card">
      <p className="date">Tomorrow</p>
      <img className="icon" src={icon} alt="weather icon" />
      <div className="weather_min_max_container">
        <p>{min}°C</p>
        <p>{max}°C</p>
      </div>
    </div>
  );
}

export default ForecastCard;
