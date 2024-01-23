import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=474f0e1115436a27414a1d63d89e0e9b`; 
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        setLocation("");
      });
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Enter location"
        />
      </div>
      {data.name !== undefined && 
      <div className="container">
      <div className="top">
        <div className="location">
          <p>{data?.name}</p>
        </div>
        <div className="temp">
          <h1>{data.main?.temp.toFixed()}°F</h1>
        </div>
        <div className="description">
          <p>{data.weather[0]?.description}</p>
        </div>
      </div>
      
      <div className="bottom">
        <div className="feels">
          <p className="bold">{data.main?.feels_like}°F</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">{data.main?.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">{data.wind?.speed}MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
      }
    </div>
  );
};

export default App;
