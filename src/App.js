import React, {useState} from 'react'
import axios from "axios";
import './style.css'
function App() {

    const [weather, setWeather] = useState({});
    const [cityName, setCityName] = useState('');

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`)
    .then(({data}) => setWeather(data))
    };

    return (
        <div className="App">
            <div className='form'>
                <h1 className='form__title'>Прогноз погоды</h1>
                <input placeholder='Введите название города' className='form__input' type="text"
                       onChange={(event) => setCityName(event.target.value)}/>
                <button className='form__btn' type='button' onClick={() => getWeather()}>Получить погоду</button>


                {JSON.stringify(weather) === '{}' ?
                    <p className="p">Здесь будет ваша погода</p> :
                    <div className='weather'>
                        <div className='weather__top'>
                            <h2>{weather.name}</h2>
                            <h2>{weather.sys.country}</h2>
                        </div>
                        <div>
                            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="logo"/>
                            <span>{Math.trunc(weather.main.temp - 273.15)}</span>
                        </div>
                        <span>
                            C
                        </span>
                        |
                        <span>
                            F
                        </span>
                        <p>{weather.weather[0].description}</p>

                    </div>

                }

            </div>
        </div>
    );
}

export default App;