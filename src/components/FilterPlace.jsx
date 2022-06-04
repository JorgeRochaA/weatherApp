import { React, useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import FilterLoader from "./FilterLoader";
import LocationBox from "./LocationBox";
import "../styles/FilterPlace/FilterPlace.scss";

function FilterPlace(props) {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const token = "&appid=c47ba15af012e0d9a3f077e2a7c07b1d";

  const [currentMessage, setCurrentMessage] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationData, setLocationData] = useState();
  const [showError, setShowError] = useState(false);
  const [showLoader, setShowLoader] = useState("");

  const toggle = () => {
    setShowError(false);
    setLocationData();
    setLocationName("");
    props.toggle();
  };

  const getValue = (e) => {
    setLocationName(e.target.value);
    setCurrentMessage("");
    setShowError(false);
  };

  const sendValue = () => {
    if (locationName.length) {
      setShowLoader("show");
      axios
        .get(`${baseURL}${locationName}${token}`)
        .then((result) => {
          setLocationData(result.data);
          setShowLoader("");
          setLocationName("");
        })
        .catch((err) => {
          setShowError("show");
          setCurrentMessage("Couldn't find the place");
          setShowLoader("");
          setLocationName("");
        });
    } else {
      setCurrentMessage("Fill in the blank");
      setShowError(true);
    }
  };

  const sendLocationName = (e) => {
    props.toggle();
    props.setCityName(e);
    setShowError(false);
    setLocationData();
    setLocationName("");
  };

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
      <div className="filter">
        <input
          value={locationName}
          onChange={getValue}
          type="text"
          name="locationName"
          id="location_input"
          placeholder="Search Location"
          autoComplete="off"
        />
        <button onClick={sendValue}>Search</button>
      </div>
      <div className="locations_container">
        <FilterLoader show={showLoader} />
        {showError && <ErrorMessage message={currentMessage} />}
        {locationData && !showLoader && currentMessage === "" && (
          <LocationBox
            place={locationData}
            toggle={toggle}
            sendLocationName={sendLocationName}
          />
        )}
      </div>
    </div>
  );
}
export default FilterPlace;
