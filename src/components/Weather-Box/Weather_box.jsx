import React from 'react';
import cloud from '../assest/cloud.png';
import './Weather_box.css';
const Weather_box = () => {
  return (
    <div>
      <div className="weather-box">
        <div className="box">
            <div className="info-weather">
                <div className="weather">
                    {/* <img src={cloud} /> */}
                    <p className="temperature">0<span>°C</span></p>
                    <p className="description">Broken Clouds</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather_box
