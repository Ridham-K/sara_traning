import { useState } from "react";

function SearchBar({
  city,
  setCity,
  searchWeather,
  suggestions,
  setSuggestions,
  fetchSuggestions,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => fetchSuggestions(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 200);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchWeather();
            }
          }}
        />

        <button onClick={() => searchWeather()}>
          Search
        </button>
      </div>

      {isFocused && suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setCity(item.name);
                setSuggestions([]);
                setIsFocused(false);

                setTimeout(() => {
                  searchWeather(item.name);
                }, 0);
              }}
            >
              {item.name}
              {item.state ? `, ${item.state}` : ""}
              {item.country ? `, ${item.country}` : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;