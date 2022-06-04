import React from "react";
import "../styles/SearchButton/SearchButton.scss";

function Search({ toggle }) {
  return (
    <div className="search">
      <button className="search_button" onClick={toggle}>
        Search for places
      </button>
    </div>
  );
}
export default Search;
