import { React, useState, useEffect } from "react";
import "../styles/ShowWeather.scss";
import Search from "../components/Search.jsx";
import axios from "axios";
function ShowWeather(props) {
  const [currentWoeid, setcurrentWoeid] = useState("2514815");
  const [currentWeather, setcurrentWeather] = useState([]);

  useEffect(() => {
    props.show();
    axios
      .get(`https://www.metaweather.com/api/location/${currentWoeid}`)
      .then((result) => {
        setcurrentWeather(result.data);
        props.hide();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentWoeid]);

  useEffect(() => {
    if (props.newWoeid) {
      setcurrentWoeid(props.newWoeid);
    }
  }, [props.newWoeid]);

  const getDayName = (dateStr) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

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
        {currentWeather.consolidated_weather && (
          <img
            className="weather_img"
            src={require(`../assets/${currentWeather.consolidated_weather[0].weather_state_abbr}.png`)}
            alt="weather_img"
          />
        )}
      </div>
      <div className="info">
        <h2>
          {currentWeather.consolidated_weather &&
            currentWeather.consolidated_weather[0].the_temp.toFixed(0)}
          °C
        </h2>
        <h3>
          {currentWeather.consolidated_weather &&
            currentWeather.consolidated_weather[0].weather_state_name}
        </h3>
        <h4>Today . Fri, 5 Jun</h4>
        <h4>
          <i className="fas fa-map-marker-alt"></i>
          {currentWeather.consolidated_weather && " " + currentWeather.title}
        </h4>
      </div>
    </div>
  );
}
export default ShowWeather;
