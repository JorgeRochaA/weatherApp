import "../styles/ShowWeather/ShowWeather.scss";
import { React } from "react";
import SearchButton from "./SearchButton";
function ShowWeather({ weatherImg, toggle, weather, menuIsOpen }) {
  console.log(weather);
  return (
    <div className="weather_container">
      <div className="search_container">
        {!menuIsOpen && <SearchButton toggle={toggle} />}
      </div>
      <div className="img_container">
        <img
          className="cloud_background"
          src={require("../assets/Cloud-background.png")}
          alt="cloud-background"
        />
        {weatherImg && (
          <img className="weather_img" src={weatherImg} alt="weather_img" />
        )}
      </div>
      <div className="info">
        <h2>
          {weather && (weather.main.temp - 273.15).toFixed(1)}
          ºC
        </h2>
        <h3>{weather && weather.weather[0].description}</h3>
        <h4 className="date">
          {"Today • " +
            new Date().toLocaleDateString("en-us", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
        </h4>
        <h4 className="place">
          <i className="fas fa-map-marker-alt"></i>
          {weather && " " + weather.name}
        </h4>
      </div>
    </div>
  );
}
export default ShowWeather;
