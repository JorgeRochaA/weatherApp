import "../styles/LocationBox/LocationBox.scss";
import React from "react";
function LocationBox(props) {
  const getWeather = (e) => {
    props.sendLocationName(e);
  };

  return (
    <div className="locations" onClick={() => getWeather(props.place.name)}>
      <h4>{props.place.name}</h4>
      <img src={require("../assets/right-arrow.png")} alt="arrow" />
    </div>
  );
}
export default LocationBox;
