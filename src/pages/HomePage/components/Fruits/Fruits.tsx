import './Fruits.scss';
import apple from './FruitsImages/apple.svg';
import avocado from './FruitsImages/avocado.png';
import firstdish from '../Fruits/FruitsImages/Group 85.png';
import forthdish from '../Fruits/FruitsImages/Group 89.png';
import playicon from '../Fruits/FruitsImages/play icon.png';
import seconddish from '../Fruits/FruitsImages/Group 87.png';
import thirddish from '../Fruits/FruitsImages/Group 88.png';
import vector1 from './FruitsImages/Vector 1.png';
import vector2 from './FruitsImages/Vector 2.png';

export const Fruits = () => {
  const styles = `
  .heading-first-line::before {
    content: url("${vector1}");
    position: absolute;
    left: -10px;
  }
  
  .heading-last-line::after {
    content: url("${vector2}");
    position: absolute;
    right: -15px;
  }`;
  return (
    <>
      <style>{styles}</style>
      <div className="home ">
        <div className="leftpart">
          <img className="dish1" src={firstdish} alt="firstdish" />
          <img className="dish2" src={seconddish} alt="seconddish" />
        </div>
        <div className="centerpart">
        <div className="fruit-text">
            <div className="heading-premimum">
              <p className="heading-first-line">Premium quality</p>
            </div>
            <div className="heading-catering">
              <p>catering diets</p>
              <img className="apple" src={apple} alt="apple" />
              <p>for</p>
            </div>
            <div className="heading-exacting">
              <img className="avacado" src={avocado} alt="avocado" />
              <p className="heading-last-line">exacting</p>
            </div>
          </div>
          <p className="littletext">
            Culpa qui officia deserunt mollitia animi. Et harum quidem rerum facilis est et
            <br /> expedita distinctio. Nam libero tempore, cum soluta nobis est
          </p>
          <div className="adjust-diet">
            <button className="dietbutton">Adjust diet</button>
            <div className="videobutton">
              <img src={playicon} alt="playicon" />
              <a className="video" href="https://youtu.be/b_6j2tQWUGE">
                Watch video
              </a>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <img className="dish3" src={thirddish} alt="thirddish" />
          <img className="dish4" src={forthdish} alt="forthdish" />
        </div>
      </div>
    </>
  );
};
