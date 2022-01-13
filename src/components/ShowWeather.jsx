import React from "react";
import "../styles/ShowWeather.scss";
import Search from "../components/Search.jsx";
function showWeather(props) {
  return (
    <div className="weather_container">
      <div className="search_container">
        <Search toggle={props.toggle} />
      </div>
      <div className="img_container">
        <img
          className="cloud_background"
          src={require("../assets/Cloud-background.png")}
          alt="cloud-background"
        />
        <img
          className="weather_img"
          src={require("../assets/Shower.png")}
          alt="weather_img"
        />
      </div>
      <div className="info">
        <h2>15°C</h2>
        <h3>Shower</h3>
        <h4>Today . Fri, 5 Jun</h4>
        <h4>
          <i className="fas fa-map-marker-alt"></i> Helsinki
        </h4>
      </div>
    </div>
  );
}
export default showWeather;
