import "../styles/FilterPlace/FilterPlace.scss";
import { React, useEffect, useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import FilterLoader from "./FilterLoader";
import LocationBox from "./LocationBox";
import SearchInput from "./SearchInput";
function FilterPlace(props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [location, setLocation] = useState("");
  const [places, setPlaces] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showLoader, setShowLoader] = useState("");
  const baseURL = "https://www.metaweather.com/api/location/search/?query=";
  const crossDomain = "https://the-ultimate-api-challenge.herokuapp.com/";

  const fillTheInput = () => {
    setPlaces([]);
    setShowError(true);
    setCurrentMessage("Fill in the blank");
  };

  const search = (e) => {
    setPlaces([]);
    setLocation(e);
  };

  const toggle = () => {
    props.toggle();
    setPlaces([]);
    setShowError(false);
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
