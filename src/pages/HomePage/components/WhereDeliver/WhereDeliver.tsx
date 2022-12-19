import './WhereDeliver.scss';
import Vector from './Vector.svg';
import line13 from './Line 13.svg';

export const WhereDeliver = () => {
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
          <input className="city-name" type="text" placeholder="City name " />
          <div className="check-locate">
            <button className="check">Check</button>
            <div className="locate-me">
              <img src={Vector} alt="vectorerror" />
              <p className="locate-me-text">Locate me</p>
            </div>
          </div>
        </div>
        <div className="where-rightpart">
          <button className="gridpart">Bakı</button>
          <button className="gridpart">Qazax</button>
          <button className="gridpart">Sumqayıt</button>
          <button className="gridpart">Yardımlı</button>
          <button className="gridpart">Salyan</button>
          <button className="gridpart">Quba</button>
          <button className="gridpart">Cəbrayıl</button>
          <button className="gridpart">Qax</button>
          <button className="gridpart">Astara</button>
          <button className="gridpart">Gəncə</button>
          <button className="gridpart">Şəmkir</button>
          <button className="gridpart">Lerik</button>
        </div>
      </div>
    </div>
  );
};
