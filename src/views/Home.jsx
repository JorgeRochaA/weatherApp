import "../styles/Home/Home.scss";

import { React, useState, useEffect } from "react";
import axios from "axios";
import FilterPlace from "../components/FilterPlace";
import ForecastContainer from "../components/ForecastContainer";
import Loader from "../components/Loader";
import ShowWeather from "../components/ShowWeather";

const Home = () => {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const baseURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";

  const [cityName, setCityName] = useState("Helsinki");
  const [currentForecastWeather, setCurrentForecastWeather] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState("");
  const [weatherIconUrl, setWeatherIconUrl] = useState("");

  useEffect(() => {
    //get the weather for the current city
    setShowLoader("show");
    axios
      .get(`${baseURL}${cityName}${token}`)
      .then((result) => {
        setCurrentWeather(result.data);
        setWeatherIconUrl(
          `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseURLForecast}${cityName}${token}`)
      .then((result) => {
        const reduceList = result.data.list.splice(1, 5);
        setCurrentForecastWeather(reduceList);
        setShowLoader("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [menuIsOpen]);

  const toggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="home">
      <Loader showLoader={showLoader} />
      <FilterPlace
        toggle={toggle}
        setCityName={setCityName}
        menuIsOpen={menuIsOpen ? "active" : ""}
      />
      <ShowWeather
        toggle={toggle}
        menuIsOpen={menuIsOpen}
        weatherImg={weatherIconUrl}
        weather={currentWeather}
      />
      <ForecastContainer forecastWeather={currentForecastWeather} />
    </div>
  );
};

export default Home;
