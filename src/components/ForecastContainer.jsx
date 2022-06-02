import "../styles/ForecastContainer/ForecastContainer.scss";
import ForecastCard from "./ForecastCard";
function ForecastContainer({ forecastWeather }) {
  return (
    <div className="forecast_container">
      {forecastWeather && (
        <div className="forecast_cards_container">
          {forecastWeather.map((forecast, index) => {
            return (
              <ForecastCard
                key={index}
                date={`${forecast.dt_txt.substring(
                  8,
                  10
                )}/${forecast.dt_txt.substring(
                  5,
                  7
                )}/${forecast.dt_txt.substring(
                  0,
                  4
                )} ${forecast.dt_txt.substring(11, 13)}h`}
                min={(forecast.main.temp_min - 273.15).toFixed(1)}
                max={(forecast.main.temp_max - 273.15).toFixed(1)}
                icon={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ForecastContainer;
