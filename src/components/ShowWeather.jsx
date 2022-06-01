import "../styles/ShowWeather/ShowWeather.scss";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import Search from "./Search";
function ShowWeather(props) {
  const [currentWeather, setcurrentWeather] = useState([]);
  const [currentWoeid, setcurrentWoeid] = useState("new york");
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
  const cityName = "q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";
  const [getIconURL, setgetIconURL] = useState("");
  const getData = useRef();

  const callInfo = () => {
    props.show();
    axios
      .get(`${baseURL}${cityName}${currentWoeid}${token}`)
      .then((result) => {
        setcurrentWeather(result.data);
        setgetIconURL(
          `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
        );
        props.hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData.current = callInfo;

  useEffect(() => {
    getData.current();
  }, [currentWoeid]);

  useEffect(() => {
    if (props.newWoeid) {
      setcurrentWeather([]);
      setcurrentWoeid(props.newWoeid);
    }
  }, [props.newWoeid]);

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
        {getIconURL && (
          <img className="weather_img" src={getIconURL} alt="weather_img" />
        )}
      </div>
      <div className="info">
        <h2>
          {currentWeather.main &&
            (currentWeather.main.temp - 273.15).toFixed(1)}
          ºC
        </h2>
        <h3>
          {currentWeather.weather && currentWeather.weather[0].description}
        </h3>
        <h4>{new Date().toDateString()}</h4>
        <h4>
          <i className="fas fa-map-marker-alt"></i>
          {currentWeather.name && " " + currentWeather.name}
        </h4>
      </div>
    </div>
  );
}
export default ShowWeather;
