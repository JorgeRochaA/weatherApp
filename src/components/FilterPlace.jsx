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
  const [place, setPlace] = useState();
  const [showError, setShowError] = useState(false);
  const [showLoader, setShowLoader] = useState("");
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
  const cityName = "q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";

  const fillTheInput = () => {
    setPlace();
    setLocation("");
    setShowError(true);
    setCurrentMessage("Fill in the blank");
  };

  const search = (e) => {
    setPlace();
    setLocation(e);
  };

  const toggle = () => {
    props.toggle();
    setPlace();
    setShowError(false);
  };

  useEffect(() => {
    if (location.length) {
      setShowError(false);
      setShowLoader("show");
      axios
        .get(`${baseURL}${cityName}${location}${token}`)
        .then((result) => {
          setPlace(result.data);
          setShowLoader("");
          setLocation("");
          setCurrentMessage("");
        })
        .catch((err) => {
          console.log(err);
          setShowLoader("");
          setCurrentMessage("Couldn't find the place");
          setShowError(true);
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
        {place && !showLoader && currentMessage === "" && (
          <LocationBox
            place={place}
            toggle={toggle}
            sendWoeid={props.sendWoeid}
          />
        )}
      </div>
    </div>
  );
}
export default FilterPlace;
