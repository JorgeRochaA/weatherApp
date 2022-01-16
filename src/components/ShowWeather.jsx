import { React, useState, useEffect, useRef } from "react";
import "../styles/ShowWeather/ShowWeather.scss";
import Search from "./Search";
import axios from "axios";
function ShowWeather(props) {
  const [currentWoeid, setcurrentWoeid] = useState("2514815");
  const [currentWeather, setcurrentWeather] = useState([]);
  const baseURL = "https://www.metaweather.com/api/location/";
  const crossDomain = "https://the-ultimate-api-challenge.herokuapp.com/";
  const getData = useRef();
  const callInfo = () => {
    props.show();
    axios
      .get(`${crossDomain}${baseURL}${currentWoeid}`)
      .then((result) => {
        setcurrentWeather(result.data);
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
        {currentWeather.consolidated_weather && (
          <h4>
            {renderDate(currentWeather.consolidated_weather[0].applicable_date)}
          </h4>
        )}
        <h4>
          <i className="fas fa-map-marker-alt"></i>
          {currentWeather.consolidated_weather && " " + currentWeather.title}
        </h4>
      </div>
    </div>
  );
}
export default ShowWeather;
