import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function getWeatherIcon(condition) {
  switch (condition) {
    case "Clear":
      return <WbSunnyIcon sx={{ fontSize: 80, color: "#FFC107" }} />;

    case "Clouds":
      return <CloudIcon sx={{ fontSize: 80, color: "gray" }} />;

    case "Rain":
    case "Drizzle":
      return <GrainIcon sx={{ fontSize: 80, color: "#2196F3" }} />;

    case "Thunderstorm":
      return (
        <ThunderstormIcon
          sx={{ fontSize: 80, color: "#673AB7" }}
        />
      );

    case "Snow":
      return <AcUnitIcon sx={{ fontSize: 80, color: "#03A9F4" }} />;

    default:
      return <CloudIcon sx={{ fontSize: 80 }} />;
  }
}

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      {getWeatherIcon(weather.weather[0].main)}

      <h3>{weather.weather[0].description}</h3>

      <p>
        <ThermostatIcon /> Temperature: {weather.main.temp}°C
      </p>

      <p>
        <WaterDropIcon /> Humidity: {weather.main.humidity}%
      </p>

      <p>
        <AirIcon /> Wind: {weather.wind.speed} m/s
      </p>
    </div>
  );
}

export default WeatherCard;