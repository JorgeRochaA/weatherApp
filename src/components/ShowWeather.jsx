import "../styles/ShowWeather/ShowWeather.scss";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import Search from "./Search";
function ShowWeather(props) {
  const [currentWeather, setcurrentWeather] = useState([]);
  const [currentWoeid, setcurrentWoeid] = useState("london");
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
  const cityName = "q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";
  const getData = useRef();

  const callInfo = () => {
    props.show();
    axios
      .get(`${baseURL}${cityName}${currentWoeid}${token}`)
      .then((result) => {
        setcurrentWeather(result.data);
        props.hide();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData.current = callInfo;

  const getDate = (date) => {
    let separatedDate = date.split("-");
    return `${separatedDate[1]}/${separatedDate[2]}/${separatedDate[0]}`;
  };
  const getDayName = (dateStr) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  const getMonthName = (dateStr) => {
    const monthNames = [
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
    let date = new Date(dateStr);
    return monthNames[date.getMonth()];
  };

  const renderDate = (date) => {
    let separatedDate = getDate(date);
    let dayName = getDayName(separatedDate);
    let monthName = getMonthName(separatedDate);
    let dayNumber = separatedDate.split("/");
    return `${dayName}, ${dayNumber[1]}, ${monthName}`;
  };

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
          {currentWeather.main &&
            (currentWeather.main.temp - 273.15).toFixed(1)}
          ºC
        </h2>
        <h3>
          {currentWeather.weather && currentWeather.weather[0].description}
        </h3>
        {currentWeather.consolidated_weather && (
          <h4>
            {renderDate(currentWeather.consolidated_weather[0].applicable_date)}
          </h4>
        )}
        <h4>
          <i className="fas fa-map-marker-alt"></i>
          {currentWeather.name && " " + currentWeather.name}
        </h4>
      </div>
    </div>
  );
}
export default ShowWeather;
