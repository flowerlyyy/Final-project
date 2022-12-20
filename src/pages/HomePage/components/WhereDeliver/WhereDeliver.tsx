import './WhereDeliver.scss';
import { useState } from 'react';
import Vector from './Vector.svg';
import line13 from './Line 13.svg';

export const WhereDeliver = () => {
  const cities = [
    'Bakı',
    'Qazax',
    'Sumqayıt',
    'Yardımlı',
    'Salyan',
    'Quba',
    'Cəbrayıl',
    'Qax',
    'Astara',
    'Gəncə',
    'Şəmkir',
    'Lerik',
  ];
  const [chosenCity, setChosenCity] = useState('');

  return (
    <div className="where-deliver narrow-container">
      <div className="line-div">
        <img src={line13} alt="lineerror" />
      </div>
      <p className="where">Where we deliver</p>
      <div className="where-parts">
        <div className="where-leftpart">
          <p className="see-if">
            See if we're delivering to you right now! Use the search engine by entering the postal code of
            your locality and see if we can deliver your order there.
          </p>
          <input
            className="city-name"
            type="text"
            value={chosenCity}
            placeholder="City name"
            onChange={(e) => setChosenCity(e.target.value)}
          />
          <div className="check-locate">
            <button className="check">Check</button>
            <div className="locate-me">
              <img src={Vector} alt="vectorerror" />
              <p className="locate-me-text">Locate me</p>
            </div>
          </div>
        </div>
        <div className="where-rightpart">
          {cities.map((item, index) => (
            <button className="gridpart" onClick={() => setChosenCity(item)} key={index}>
               {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
