import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Search from './components/Search';
import { debounce } from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherText, setWeatherText] = useState('');
  const [weatherName, setWeatherName] = useState('');
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const baseURL = 'http://api.weatherapi.com/v1';
  const key = import.meta.env.VITE_WEATHER_KEY;

  const fetchWeather = () => {
    if (!city) return;
    setLoading(true);
    setError(false);
    axios
      .get(`${baseURL}/current.json`, {
        params: {
          key: key,
          q: city,
          lang: 'it',
        },
      })
      .then((res) => {
        setWeatherIcon(res.data.current.condition.icon);
        setWeatherText(res.data.current.condition.text);
        setWeatherName(res.data.location.name);
        // console.log(res.data.location.name);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  const debounceSetCity = debounce((value) => {
    setCity(value);
  }, 1000);

  const handleCityChange = (e) => {
    debounceSetCity(e.target.value);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div className="text-center p-4 border rounded shadow-lg bg-light w-75">
        <h1 className="mb-4">Previsioni Meteo</h1>
        <Search setCity={handleCityChange} />
        <div className="mt-4">
          <h3>
            {loading ? (
              <strong role="status">Caricamento...</strong>
            ) : error ? (
              'Città non trovata'
            ) : (
              <Weather
                weatherIcon={weatherIcon}
                weatherText={weatherText}
                weatherName={weatherName}
              />
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
