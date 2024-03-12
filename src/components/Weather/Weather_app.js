import React from 'react'
import './Weather_app.css'
import 'boxicons'
import cloud from '../assest/cloud.png'
const Weather_app = () => {

  
  return (
    <div className='container'>
      <div className="search-box">
        <span className='map'><box-icon type='solid' name='map'></box-icon></span>
        <input type="text" placeholder="Enter Your Location" />
        <button className="bx bx-search"><box-icon name='search'></box-icon></button>
      </div>
      <p className="city-hide">city hide</p>
      <div className="weather-box">
        <div className="box">
          <div className="info-weather">
            <div className="weather">
              <img src={cloud} />
              <p className="temperature">16<span>°C</span></p>
              <p className="description">Broken Clouds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather_app
