import React from "react";
import "../styles/FilterLoader/FilterLoader.scss";
function FilterLoader({ show }) {
  return (
    <div className={`filter_loader ${show}`}>
      <div className="loading__letter">L</div>
      <div className="loading__letter">o</div>
      <div className="loading__letter">a</div>
      <div className="loading__letter">d</div>
      <div className="loading__letter">i</div>
      <div className="loading__letter">n</div>
      <div className="loading__letter">g</div>
      <div className="loading__letter">.</div>
      <div className="loading__letter">.</div>
      <div className="loading__letter">.</div>
    </div>
  );
}
export default FilterLoader;
