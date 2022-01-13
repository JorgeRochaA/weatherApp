import { useState } from "react";
import "./styles/App.scss";
import ShowWeather from "./components/ShowWeather.jsx";
import FilterPlace from "./components/FilterPlace.jsx";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className="App">
      <FilterPlace toggle={toggle} menuIsOpen={menuIsOpen ? "active" : ""} />
      <ShowWeather toggle={toggle} />
    </div>
  );
}

export default App;
