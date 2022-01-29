import "../styles/Home/Home.scss";
import FilterPlace from "../components/FilterPlace";
import Loader from "../components/Loader";
import React, { useState } from "react";
import ShowWeather from "../components/ShowWeather";
function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState("");
  const [woeid, setWoeid] = useState("");

  const hide = () => {
    setShowLoader("");
  };

  const sendWoeid = (e) => {
    setWoeid(e);
  };

  const show = () => {
    setShowLoader("show");
  };

  const toggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="home">
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
export default Home;
