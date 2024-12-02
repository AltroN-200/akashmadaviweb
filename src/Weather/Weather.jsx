import React, { useState } from 'react'
import './Weather.css'
import Searchicon from './search-icons.svg'
import Humidity from './WeatherIcon/humidity.png'
import Wind from './WeatherIcon/wind.png'
import clear_sky_d from './WeatherIcon/sun.png'
import clear_sky_n from './WeatherIcon/moon.png'
import few_cloud_d from './WeatherIcon/sun clouds.png'
import few_cloud_n from './WeatherIcon/moon clouds.png'
import clouds from './WeatherIcon/cloud.png'
import dark_cloud from './WeatherIcon/dark cloud.png'
import rain from './WeatherIcon/rain.png'
import thunder from './WeatherIcon/lightning.png'
import rain_sun from './WeatherIcon/rain sun cloud.png'
import rain_moon from './WeatherIcon/rain moon cloud.png'
import snow from './WeatherIcon/snow.png'
import mist from './WeatherIcon/mist.png'

export default function Weather() {
    const apikey = '37453245da31a5fad78ed9326222a0bc';
    const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

    let [city, setCity] = useState('');
    let [uDetails, setDetails] = useState();
    let [loader, setloader] = useState(false);
    let [error, seterror] = useState(false);

    const allicons = {
        "01d": clear_sky_d,
        "01n": clear_sky_n,
        "02d": few_cloud_d,
        "02n": few_cloud_n,
        "03d": clouds,
        "03n": clouds,
        "04d": dark_cloud,
        "04n": dark_cloud,
        "09d": rain,
        "09n": rain,
        "10d": rain_sun,
        "10n": rain_moon,
        "11d": thunder,
        "11n": thunder,
        "13d": snow,
        "13n": snow,
        "50d": mist,
        "50n": mist,
    }

    let getData = (event) => {
        fetch(apiurl + city + `&appid=${apikey}`)
            .then((res) => res.json())
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.cod === '404') {
                    seterror(true);
                }
                else {
                    setDetails(finalRes)
                    seterror(false)
                }
                setloader(false)
            })
        setloader(true)
        event.preventDefault()
        setCity('');
    }

    return (
        <div className='bg-cal'>
            <div className="card">
                <form action="#" onSubmit={getData}>  <div className="search">
                    <input type="text" id='uinput' value={city} onChange={(e) => setCity(e.target.value)} placeholder="enter city name" />
                    <button><img src={Searchicon} alt='search' /></button>
                </div>
                </form>
                <img className={`loader ${loader ? '' : 'loadernone'} `} src='https://usagif.com/wp-content/uploads/loading-25.gif' alt='loading' />
                {uDetails !== undefined
                    ? <div className="weather">
                        <img src={allicons[uDetails.weather[0].icon]} alt='rain' className="weather-icon" />
                        <h1 className="temp">{uDetails.main.temp}</h1>
                        <h2 className="city">{uDetails.name}</h2>
                        <div className="details">
                            <div className="col">
                                <img src={Humidity} alt='humidity' />
                                <div>
                                    <p className="humidity">{uDetails.main.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={Wind} alt='wind' />
                                <div>
                                    <p className="wind">{uDetails.wind.speed} km/hr</p>
                                    <p>Wind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <h5 className={`error ${error ? '' : 'errornone'}`}>Invalid city name</h5>
                }
            </div>
        </div>
    )
}
