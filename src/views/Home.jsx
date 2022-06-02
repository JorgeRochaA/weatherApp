import { React, useState, useEffect } from "react";
import axios from "axios";
import FilterPlace from "../components/FilterPlace";
import Loader from "../components/Loader";
import ShowWeather from "../components/ShowWeather";

import "../styles/Home/Home.scss";

const Home = () => {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const baseURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";

  const [cityName, setCityName] = useState("new york");
  const [currentWeather, setCurrentWeather] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState("");
  const [weatherIconUrl, setWeatherIconUrl] = useState("");

  const getWeather = () => {
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
        setShowLoader("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

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
      {/* <ForecastContainer /> */}
    </div>
  );
};

export default Home;
