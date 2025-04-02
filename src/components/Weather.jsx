 import React, { useEffect, useState, useRef} from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'



const Weather = () => {

    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const [searchHistory, setSearchHistory] = useState([]);


    const search = async (city) => {
        
        if (city === "") {
          alert("Enter City Name");
          return;
        }
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
      
          const response = await fetch(url);
          const data = await response.json();

      
          if (data.cod !== 200) {
            alert(`City not found: ${city}`);
            setWeatherData(false);
            return;
          }
      
          const iconCode = data.weather[0].icon;
          setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: iconCode,
          });
          setSearchHistory((prevHistory) => {
            const formattedCity = city.trim();
            if (!prevHistory.includes(formattedCity)) {
              return [formattedCity, ...prevHistory].slice(0, 5); // keep max 5
            }
            return prevHistory;
          });
          
        } catch (error) {
          console.error("Error fetching weather data:", error);
          alert("Something went wrong while fetching data.");
          setWeatherData(false);
        }
      };
      
    useEffect(()=>{
        search("Australia");
    }, [])

    return (
        <div className='weather'>
          <div className="search-bar">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  search(inputRef.current.value);
                }
              }}
            />
            <img
              src={search_icon}
              alt="search"
              onClick={() => search(inputRef.current.value)}
            />
          </div>
      
            {searchHistory.length > 0 && (
            <div className="search-history">
              <h4>Recent Searches</h4>
              <ul>
                {searchHistory.map((city, index) => (
                  <li key={index} onClick={() => search(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            )}
      
            {weatherData ? (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
                className="weather-icon"
              />
              <p className="temperature">{weatherData.temperature}°F</p>
              <p className="location">{weatherData.location}</p>
              <div className="weather-data">
                <div className="col">
                  <img src={humidity_icon} alt="" />
                  <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                  </div>
                </div>
                <div className="col">
                  <img src={wind_icon} alt="" />
                  <div>
                    <p>{weatherData.windSpeed} mph</p>
                    <span>Wind Speed</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="no-data">Search for a city to get weather info.</p>
          )}
        </div>
      );
      
}

export default Weather
