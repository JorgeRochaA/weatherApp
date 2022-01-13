import "./styles/App.scss";
import ShowWeather from "./components/ShowWeather.jsx";
import FilterPlace from "./components/FilterPlace.jsx";
function App() {
  const menuOpen = false;
  return (
    <div className="App">{menuOpen ? <ShowWeather /> : <FilterPlace />}</div>
  );
}

export default App;
