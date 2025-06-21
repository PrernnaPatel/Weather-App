import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1589929495919-05051292c361?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb2tlbiUyMGNsb3VkfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_URL = "https://plus.unsplash.com/premium_photo-1710004469605-94f952a9e539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const RAIN_URL = "https://images.unsplash.com/photo-1706730511764-23a0ff2eecbf?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon />;
        if (info.temp > 15) return <SunnyIcon />;
        return <AcUnitIcon />;
      };

    return(
        <div>
           
            <div className='card'>
            <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  borderRadius: "16px",
                  transition: "0.3s",
                  "&:hover": {
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  margin: "0 auto",
                  paddingBottom: "10px"
                  },
                }}
            >

      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="weather image"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {/* {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
           */}

           {info.city} {getWeatherIcon()}

        </Typography>
        <img src={`https://openweathermap.org/img/wn/${info.iconCode}@2x.png`} alt="weather icon" style={{ margin: "10px auto", display: "block" }}/>

        <Typography variant="body2" color="text.secondary" component={"div"}> 
          <div>Temperature : {info.temp}&deg;C</div>
          <div>Humidity : {info.humidity}</div>
          <div>Min Temp  : {info.tempMin}&deg;C</div>
          <div>Max Temp  : {info.tempMax}&deg;C</div>
          <div>Min Temp  : {info.tempMin}&deg;C</div>
          <div>The weather can be describes as {info.weather} and feels like {info.feelsLike}&deg;C</div>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
}