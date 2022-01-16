import React, { useState } from "react";
import "./styles/App.scss";
import Loader from "./components/Loader";
import ShowWeather from "./components/ShowWeather.jsx";
import FilterPlace from "./components/FilterPlace.jsx";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [woeid, setWoeid] = useState("");
  const [showLoader, setShowLoader] = useState("");
  const toggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const sendWoeid = (e) => {
    setWoeid(e);
  };
  const show = () => {
    setShowLoader("show");
  };
  const hide = () => {
    setShowLoader("");
  };
  return (
    <div className="App">
      <Loader showLoader={showLoader} />
      <FilterPlace
        toggle={toggle}
        sendWoeid={sendWoeid}
        menuIsOpen={menuIsOpen ? "active" : ""}
      />
      <ShowWeather toggle={toggle} newWoeid={woeid} show={show} hide={hide} />
    </div>
  );
}

export default App;
