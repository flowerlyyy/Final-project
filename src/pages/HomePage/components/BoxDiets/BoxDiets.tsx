import './BoxDiets.scss';
//import img1 from "../BoxDiets/diversity.png"
import img5 from '../BoxDiets/group91.png';
import img6 from '../BoxDiets/group92.png';
import img7 from '../BoxDiets/group93.png';
import img8 from '../BoxDiets/group94.png';
import React from 'react';
//import img6 from "../BoxDiets/gym.png"
//import img7 from "../BoxDiets/plant.png"
//import img8 from "../BoxDiets/taste.png"
export const BoxDiets = () => {
  return (
    <div className="box-diet narrow-container">
      <h2 className='box-diet-h2'>Box diets with which you get more</h2>
      <div className="boxes">
        <div className="box-box">
          <img className="symbol" src={img5} alt="" />

          <div className="diet-text">
            <h4>Fresh ingredients</h4>
            <p className="diet-p">Donec in nisl porttitor, blandit augue in, ullamcorper felis</p>
          </div>
        </div>

        <div className="box-box">
          <img className="symbol" src={img6} alt="" />
          <div className="diet-text">
            <h4>Taste</h4>
            <p className="diet-p">Apibus sed erat nec volutpat. Interdum et malesuada</p>
          </div>
        </div>

        <div className="box-box">
          <img className="symbol" src={img7} alt="" />
          <div className="diet-text">
            <h4>Diversity</h4>
            <p className="diet-p">Proin hendrerit molestie placerat ec ante congue placerat non sed</p>
          </div>
        </div>

        <div className="box-box">
          <img className="symbol" src={img8} alt="" />
          <div className="diet-text">
            <h4>Match</h4>
            <p className="diet-p">
              {' '}
              Vivamus blandit, lorem non venenatis luctus, leo dui volutpat purusquis tinci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
