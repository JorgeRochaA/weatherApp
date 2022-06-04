import { React, Fragment } from "react";
import "../styles/PercentageBar/PercentageBar.scss";
function PercentageBar({ humidityPercentage }) {
  return (
    <Fragment>
      {humidityPercentage && (
        <div className="percentageBar_container">
          <div className="percentage_numbers">
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className="bar">
            <div
              className="bar_fill"
              style={{ width: 229 - (229 - (humidityPercentage / 100) * 229) }}
            ></div>
          </div>
          <div className="percentage_icon">%</div>
        </div>
      )}
    </Fragment>
  );
}

export default PercentageBar;
