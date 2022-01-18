import { React, useState } from "react";
import "../styles/SearchInput/SearchInput.scss";
function SearchInput({ search, fillTheInput }) {
  const [locationName, setLocationName] = useState("");

  const getValue = (e) => {
    setLocationName(e.target.value);
  };
  const sendValue = () => {
    if (locationName.length) {
      search(locationName);
      setLocationName("");
    } else {
      fillTheInput();
    }
  };
  return (
    <div className="filter">
      <input
        value={locationName}
        onChange={getValue}
        type="text"
        name="locationName"
        id="location_input"
        placeholder="Search Location"
        autoComplete="off"
      />
      <button onClick={sendValue}>Search</button>
    </div>
  );
}
export default SearchInput;
