import { useState,useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 36.12,
        humidity : 59,
        temp : 31.71,
        tempMax :31.71,
        tempMin : 31.71,
        weather : "broken clouds",
        iconCode: "04d"
    });

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    };

     useEffect(() => {
    const body = document.body;
    body.classList.add("animated-bg");
//     if (weatherInfo.weather.includes("rain")) {
//       body.style.background = "#90caf9";
//     } else if (weatherInfo.temp > 30) {
//       body.style.background = "#ffe082";
//     } else {
//       body.style.background = "#b3e5fc";
//     }
//   }, [weatherInfo]);
if (weatherInfo.humidity > 80) {
      body.style.background = "linear-gradient(to top, #7F7FD5, #86A8E7, #91EAE4)"; // Rainy
    } else if (weatherInfo.temp > 30) {
      body.style.background = "linear-gradient(to top, #f7971e, #ffd200)"; // Hot
    } else {
      body.style.background = "linear-gradient(to top, #74ebd5, #ACB6E5)"; // Cool/normal
    }
  }, [weatherInfo]);

    return(
        <div className="weather">
            <h1>Weather App</h1>
            <p className="tagline">Accurate. Simple. Instant.</p>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}