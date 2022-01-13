import React from "react";
import "../styles/FilterPlace.scss";
function FilterPlace(props) {
  return (
    <div className={`filter_container ${props.menuIsOpen}`}>
      <div className="close">
        <div className="close_button">
          <img
            src={require("../assets/close.png")}
            alt="close button"
            onClick={props.toggle}
          />
        </div>
      </div>
      <div className="filter">
        <input
          type="text"
          name="location"
          id="location_input"
          placeholder="Search Location"
          autoComplete="off"
        />
        <button>Search</button>
      </div>
      <div className="locations_container">
        <div className="locations">
          <h4>London</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Tokio</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>New York</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Helsinki</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Helsinki</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Rio</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Denver</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Oslo</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
        <div className="locations">
          <h4>Pekín</h4>
          <img src={require("../assets/right-arrow.png")} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
export default FilterPlace;
