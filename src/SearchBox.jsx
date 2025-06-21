import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "066a4d49340c4dc7ceaac2d15ad78287";

    let getWeatherInfo = async()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city }&appid=${API_KEY}&units=metric`);

        let jsonResponse = await response.json();
        
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
            iconCode: jsonResponse.weather[0].icon,
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    };

    
    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    };

    return(
        <div className="searchBox">

            <form onSubmit={handleSubmit}>
                 <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                 <br/><br/>
                 <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}> No such place exists!</p>}
            </form>
        </div>
    );
}