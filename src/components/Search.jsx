import "../styles/Search/Search.scss";
import React from "react";
function Search(props) {
  return (
    <div className="search">
      <button className="search_button" onClick={props.toggle}>
        Search for places
      </button>
    </div>
  );
}
export default Search;
