import React from "react";
import "../styles/Loader.scss";
function Loader(props) {
  return (
    <div className={`loader ${props.showLoader}`}>
      <div className="gif_container">
        <div className="spring">
          <img src={require("../assets/molinillo.png")} alt="" />
        </div>
        <div className="summer">
          <img src={require("../assets/parasol.png")} alt="" />
        </div>
        <div className="fall">
          <img src={require("../assets/leaf-fall.png")} alt="" />
        </div>
        <div className="winter">
          <img src={require("../assets/winter-hat.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Loader;
