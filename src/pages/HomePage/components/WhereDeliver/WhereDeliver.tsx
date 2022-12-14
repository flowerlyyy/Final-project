import './WhereDeliver.scss';
import line13 from './Line 13.svg';
import Vector from './Vector.svg';

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
          <button className="gridpart">Warszawa</button>
          <button className="gridpart">Poznań</button>
          <button className="gridpart">Szczecin</button>
          <button className="gridpart">Rzeszów</button>
          <button className="gridpart">Kraków</button>
          <button className="gridpart">Gdańsk</button>
          <button className="gridpart">Bydgoszcz</button>
          <button className="gridpart">Białystok</button>
          <button className="gridpart">Wrocław</button>
          <button className="gridpart">Lublin</button>
          <button className="gridpart">Łódź</button>
          <button className="gridpart">Olsztyn</button>
        </div>
      </div>
    </div>
  );
};
