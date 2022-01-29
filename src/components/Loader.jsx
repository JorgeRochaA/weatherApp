import "../styles/Loader/Loader.scss";
import React from "react";
function Loader(props) {
  return (
    <div className={`loader ${props.showLoader}`}>
      <div className="gif_container">
        <div className="spring">
          <img src={require("../assets/molinillo.png")} alt="Spring" />
        </div>
        <div className="summer">
          <img src={require("../assets/parasol.png")} alt="Summer" />
        </div>
        <div className="fall">
          <img src={require("../assets/leaf-fall.png")} alt="Fall" />
        </div>
        <div className="winter">
          <img src={require("../assets/winter-hat.png")} alt="Winter" />
        </div>
      </div>
    </div>
  );
}
export default Loader;
