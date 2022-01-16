import { React, useEffect, useState } from "react";
import axios from "axios";
import "../styles/FilterPlace/FilterPlace.scss";
import SearchInput from "./SearchInput";
import LocationBox from "./LocationBox";
function FilterPlace(props) {
  const [location, setLocation] = useState("");
  const [places, setPlaces] = useState([]);
  const baseURL = "https://www.metaweather.com/api/location/search/?query=";
  const crossDomain = "https://the-ultimate-api-challenge.herokuapp.com/";
  const toggle = () => {
    props.toggle();
    setPlaces([]);
  };

  const search = (e) => {
    setLocation(e);
  };

  useEffect(() => {
    if (location.length) {
      axios
        .get(`${crossDomain}${baseURL}${location}`)
        .then((result) => {
          setPlaces(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <div className={`filter_container ${props.menuIsOpen}`}>
      <div className="close">
        <div className="close_button">
          <img
            src={require("../assets/close.png")}
            alt="close button"
            onClick={toggle}
          />
        </div>
      </div>
      <SearchInput search={search} />
      <div className="locations_container">
        {places.map((place, index) => (
          <LocationBox
            key={index}
            place={place}
            toggle={toggle}
            sendWoeid={props.sendWoeid}
          />
        ))}
      </div>
    </div>
  );
}
export default FilterPlace;
