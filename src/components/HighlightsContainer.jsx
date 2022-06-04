import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import PercentageBar from "./PercentageBar";
import "../styles/HighlightsContainer/HighlightsContainer.scss";

function HighlightsContainer({ weather }) {
  return (
    <Fragment>
      {weather && (
        <div className="highlight_container">
          <div className="wind_card">
            <p className="card_title">Wind status</p>
            <p className="card_value">{weather.wind.speed} mph</p>
            <div className="img_container">
              <div className="image">
                <img src={require("../assets/cursor.png")} alt="arrow" />
              </div>
              WSW
            </div>
          </div>
          <div className="humidity_card">
            <div className="card_title">Humidity</div>
            <div className="card_value">{weather.main.humidity}%</div>
            <PercentageBar humidityPercentage={weather.main.humidity} />
          </div>
          {/* <div className="visibility_card"></div>
          <div className="air_card"></div> */}
        </div>
      )}
    </Fragment>
  );
}

export default HighlightsContainer;
