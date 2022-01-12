import React from "react";
import "../styles/Search.scss";
function Search() {
    return(
        <div className="search">
            <button className="search_button">Search for places</button>
            <div className="location_button">
            <img src={require('../assets/gps.png')} alt="gps logo" />
            </div>
        </div>
    );
}
export default Search;
