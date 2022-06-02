import "../styles/SearchButton/SearchButton.scss";
import React from "react";
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
