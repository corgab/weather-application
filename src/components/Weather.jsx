import search from '../assets/search.svg';

function Weather({ weatherIcon, weatherText }) {
  return (
    <div>
      <img
        src={weatherIcon ? 'https://' + weatherIcon : search}
        alt={weatherText}
        className="img-fluid mb-3"
        style={{ width: '100px', height: '100px' }}
      />
      <h3>{weatherText}</h3>
    </div>
  );
}

export default Weather;
