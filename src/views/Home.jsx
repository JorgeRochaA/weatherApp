import React, { useState } from "react";
import "../styles/Home/Home.scss";
import Loader from "../components/Loader";
import ShowWeather from "../components/ShowWeather";
import FilterPlace from "../components/FilterPlace";
function Home() {
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
