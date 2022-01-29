import "../styles/LocationBox/LocationBox.scss";
import React from "react";
function LocationBox(props) {
  
  const getWeather = (e) => {
    props.sendWoeid(e);
    props.toggle();
  };

  return (
    <div className="locations" onClick={() => getWeather(props.place.woeid)}>
      <h4>{props.place.title}</h4>
      <img src={require("../assets/right-arrow.png")} alt="arrow" />
    </div>
  );
}
export default LocationBox;
