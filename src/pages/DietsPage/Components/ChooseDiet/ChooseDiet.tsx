import '..//ChooseDiet/ChooseDiet.scss';
import Line22 from './Line 1.svg';
import Line23 from './Line2.svg';
import leaves1 from './leaves1.svg';
import leaves2 from './leaves2.svg';
export const ChooseDiet = () => {
  return (
    <div className="cant-choose-diet narrow-container">
      <img src={Line22} alt="linerror" />
      <div className="choose-yourdiet">
        <img className="leaves-left" src={leaves1} alt="leaves" />
        <div className="center-choose-diet">
          <h2 className="trial-h2">Can't you choose your diet?</h2>
          <p className="anydiet-p">
            We'll try to help you! Take advantage of the free advice of a nutritionist and choose the perfect
            kit for yourself
          </p>
          <button className="choose-diet-button">Adjust diet</button>
        </div>
        <img className="leaves-right" src={leaves2} alt="leaves" />
      </div>
      <img src={Line23} alt="linerror" />
    </div>
  );
};
