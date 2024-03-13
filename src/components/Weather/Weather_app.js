import React, { useMemo, useState } from 'react'
import './Weather_app.css'
import notFound from '../asset/404.png'
import { FaSearch } from 'react-icons/fa'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { BiWind } from "react-icons/bi";
const Weather_app = () => {
  
  const [City , setCity] = useState('');
  const[weather , setWeather] = useState();
  const[Error , setError] = useState();
  const APIKey = '82dbf744ebd65e8bf56abf06c026a068';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKey}&units=metric`;

  const handleOnChange = (event)=>{
    setCity(event.target.value);
  }
  async function fetchData(){
    try {
      let response = await fetch(url);
      let output = await response.json();
      if(response.ok){
        setWeather(output);
        setError('');
      }
      else{
        setError('404');
      }
    } 
    catch (error) {
      
    }
  }

  const keyPress = (e)=>{
    if(e.key === "Enter"){
      fetchData();
    }
  }



  return (
    <div className='container'>
      <div className="search-box">
        <div className='map'> 
          <FaMapMarkerAlt />
        </div>
        <input type="text" value={City} onChange={handleOnChange} onKeyDown={keyPress} placeholder="Enter Your Location" />
        <button onClick={()=>fetchData()}>
          <FaSearch />
        </button>
      </div>

      {
        Error && 
        (
          <div className="not-found">
            <div className="box">
                <img src={notFound}/>
                <p>Oops! Location not found!</p>
            </div>
          </div>
        )
      }
      {
        weather && weather.weather && !Error &&
        (
          <>
            <div className="weather-box">
              <div className="box">
                <div className="info-weather">
                  <div className="weather">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='new-image' alt={weather.weather[0].main}/>
                    <p className="temperature">{parseInt(weather.main.temp)}<span>°C</span></p>
                    <p className="description">{weather.weather[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="weather-details">
              <div className="humidity">
                <div className='icon'>
                  <BiWater />
                </div>
                <div className="text">
                  <div className="info-humidity">
                    <span>{weather.main.humidity} %</span>
                  </div>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="wind">
                <div className='icon'>
                  <BiWind />
                </div>
                <div className="text">
                  <div className="info-wind">
                    <span>{parseInt(weather.wind.speed)} Km/h</span>
                  </div>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) 
      }


    </div>
  )
}

export default Weather_app
