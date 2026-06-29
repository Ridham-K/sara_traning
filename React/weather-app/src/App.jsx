import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const searchWeather = async (selectedCity = city) => {
    if (!selectedCity.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setSuggestions([]); //Hide Suggestions

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error();
      }

      setWeather(data);
    } catch (err) {
      setError("City not found");
    }

    setLoading(false);
  };

  const fetchSuggestions = async (value) => {
    setCity(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
      );

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="head">WEATHER APP</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        searchWeather={searchWeather}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        fetchSuggestions={fetchSuggestions}
      />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;