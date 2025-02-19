import WeatherIcon from "./WeatherIcon";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";

function DailyForecastWidget({ data }) {
  const {units}=useContext(WeatherContext);
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  // date format
  const locale = navigator.language;
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date().setMinutes(0)),
  };
  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(day).setMinutes(0)),
  };

  weather_date.day = now_date.day === weather_date.day ? "Today" : weather_date.day;

  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">
          <div className="max">
            {Math.round(temperature_max)} {units.temperature}
          </div>
          <div className="min">
            {Math.round(temperature_min)} {units.temperature}
          </div>
        </div>
        <div className="precipitation">
          {Math.round(precipitation.total)} {units.precipitation}
        </div>
      </div>
    </div>
  );
}

export default DailyForecastWidget;
