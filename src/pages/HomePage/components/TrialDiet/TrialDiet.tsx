import './TrialDiet.scss';
import Line from './Line.svg';
import Frame2 from './Frame 2.svg';
import Frame1 from './Frame 1.svg';
import Group83 from './Group 83.svg';

export const TrialDiet= () =>{
    return(
        <div className="TrialDiet narrow-container">
      <img src={Line} alt="error" />
      <div className="Order-Diet">
        <img className="fruit-left" src={Frame2} alt="fruiterror" />
        <div className="Center-Diet">
          <h2 className="trial">Order your trial diet</h2>
          <p className="anydiet">Try any diet to choose the right one for you</p>
          <button className="choose-diet">Choose a diet</button>
        </div>
        <img className="fruit-right" src={Frame1} alt="fruiterror" />
      </div>
      <img src={Group83} alt="error" />
    </div>
    );
    };