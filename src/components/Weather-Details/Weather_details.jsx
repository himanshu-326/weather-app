import React from 'react';
import './Weather_details.css';
const Weather_details = () => {
  return (
    <div>
      <div class="weather-details">
        <div class="humidity">
            <i class='bx bx-water'></i>
            <div class="text">
                <div class="info-humidity">
                    <span>0%</span>
                </div>
                <p>Humidity</p>
            </div>
        </div>

        <div class="wind">
            <i class='bx bx-wind'></i>
            <div class="text">
                <div class="info-wind">
                    <span>0Km/h</span>
                </div>
                <p>Wind Speed</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Weather_details
