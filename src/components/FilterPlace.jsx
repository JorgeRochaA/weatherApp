import { React, useEffect, useState } from "react";
import axios from "axios";
import "../styles/FilterPlace/FilterPlace.scss";
import SearchInput from "./SearchInput";
import LocationBox from "./LocationBox";
import FilterLoader from "./FilterLoader";
import ErrorMessage from "./ErrorMessage";
function FilterPlace(props) {
  const [location, setLocation] = useState("");
  const [places, setPlaces] = useState([]);
  const [showLoader, setShowLoader] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const baseURL = "https://www.metaweather.com/api/location/search/?query=";
  const crossDomain = "https://the-ultimate-api-challenge.herokuapp.com/";
  const toggle = () => {
    props.toggle();
    setPlaces([]);
    setShowError(false);
  };

  const search = (e) => {
    setPlaces([]);
    setLocation(e);
  };

  const fillTheInput = () => {
    setPlaces([]);
    setShowError(true);
    setCurrentMessage("Fill in the blank");
  };

  useEffect(() => {
    if (location.length) {
      setShowError(false);
      setShowLoader("show");
      axios
        .get(`${crossDomain}${baseURL}${location}`)
        .then((result) => {
          if (result.data.length) {
            setPlaces(result.data);
            setShowLoader("");
            setLocation("");
          } else {
            setShowLoader("");
            setCurrentMessage("Couldn't find the place");
            setShowError(true);
          }
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
      <SearchInput search={search} fillTheInput={fillTheInput} />
      <div className="locations_container">
        <FilterLoader show={showLoader} />
        {showError && <ErrorMessage message={currentMessage} />}
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
