import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../styles/HighlightsContainer/HighlightsContainer.scss";
function HighlightsContainer({ weather }) {
  return (
    <Fragment>
      {weather && (
        <div className="highlight_container">
          <div className="wind_card">
            <p className="wind_card_title">Wind status</p>
            <p className="wind_value">{weather.wind.speed} mph</p>
            <div className="img_container">
              <div className="image">
                <img src={require("../assets/cursor.png")} alt="arrow" />
              </div>
              WSW
            </div>
          </div>
          {/* <div className="humidity_card"></div>
          <div className="visibility_card"></div>
          <div className="air_card"></div> */}
        </div>
      )}
    </Fragment>
  );
}

export default HighlightsContainer;
