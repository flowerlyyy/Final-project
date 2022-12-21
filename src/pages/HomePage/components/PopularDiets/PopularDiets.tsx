import './PopularDiets.scss';
import { DietCard } from '..//..//..//..//Components/DietCard/DietCard';
import { useState } from 'react';
import Formoms from './Mask group For moms.svg';
import LowIG from './Mask group Low IG.svg';
import MaskgroupGym from './Mask group Gym.svg';
import Maskgroupfit from './Mask group fit.svg';
import Maskgroupketo from './Mask group keto.svg';
import Maskgroupslim from './Mask group slim.svg';
import Maskgroupvegan from './Mask group vegan.svg';
import Officebox from './Mask group Office box.svg';
import arrowleft from './arrow left.svg';
import arrowright from './arrow right.svg';

export const PopularDiets = () => {
  const sequences = [
    {
      id: 1,
      imgcookie: Maskgroupslim,
      textafterimg: 'Slim',
      smallkcal: '1000 kcal',
      mediumkcal: '1300 kcal',
      bigkcal: '1500 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...',
      textfrom: 'from',
      textnumber: 57,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 2,
      imgcookie: Maskgroupfit,
      textafterimg: 'Fit',
      smallkcal: '1800 kcal',
      mediumkcal: '2000 kcal',
      bigkcal: '2500 kcal',
      textafterkcals: 'Taque earum rerum hic tenetur a sapiente maiores...',
      textfrom: 'from',
      textnumber: 65,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 2,
      imgcookie: Maskgroupvegan,
      textafterimg: 'Veqan',
      smallkcal: '1300 kcal',
      mediumkcal: '1500 kcal',
      bigkcal: '2000 kcal',
      textafterkcals: 'Taque earum rerum hic tenetur a sapiente maiores alias consequatur...',
      textfrom: 'from',
      textnumber: 59,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 4,
      imgcookie: Maskgroupketo,
      textafterimg: 'Keto',
      smallkcal: '1300 kcal',
      mediumkcal: '1500 kcal',
      bigkcal: '2000 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...',
      textfrom: 'from',
      textnumber: 57,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 5,
      imgcookie: MaskgroupGym,
      textafterimg: 'Gym',
      smallkcal: '2000 kcal',
      mediumkcal: '2500 kcal',
      bigkcal: '3000 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribusasperiores...',
      textfrom: 'from',
      textnumber: 68,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 6,
      imgcookie: Officebox,
      textafterimg: 'Office box',
      smallkcal: '1200 kcal',
      mediumkcal: '1500 kcal',
      bigkcal: '1800 kcal',
      textafterkcals: 'Taque earum rerum hic tenetur a sapiente maiores lacus enim, porta id tincidunt...',
      textfrom: 'from',
      textnumber: 50,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 7,
      imgcookie: Formoms,
      textafterimg: 'For moms',
      smallkcal: '1800 kcal',
      mediumkcal: '2000 kcal',
      bigkcal: '2500 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur sapien id nisl fringilla,quis dignissim nibh...',
      textfrom: 'from',
      textnumber: 63,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
    {
      id: 8,
      imgcookie: LowIG,
      textafterimg: 'Low IG',
      smallkcal: '1500 kcal',
      mediumkcal: '1800 kcal',
      bigkcal: '2000 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribusasperiores semper fringilla...',
      textfrom: 'from',
      textnumber: 58,
      textpln: 'pln',
      textday: '/day',
      choosebutton: 'Choose',
    },
  ];
  const SequencesWidth = 365;
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber + 1);
  };
  return (
    <div className="popular-diets narrow-container">
      <p className="themost">The most popular diets</p>
      <div className="arrows">
        <button className="arrow1" disabled={currentSlideNumber === 0} onClick={leftButtonClickHandler}>
          <img alt="errorimage" className="picarrow1" src={arrowleft} />
        </button>
        <button
          className="arrow2"
          disabled={currentSlideNumber === sequences.length - 4}
          onClick={rightButtonClickHandler}
        >
          <img alt="errorimage" className="picarrow2" src={arrowright} />
        </button>
      </div>
      <div className="fourdiets">
        {sequences.map((sequence, index) => (
          <DietCard
            key={index}
            imgcookie={sequence.imgcookie}
            textafterimg={sequence.textafterimg}
            smallkcal={sequence.smallkcal}
            mediumkcal={sequence.mediumkcal}
            bigkcal={sequence.bigkcal}
            textafterkcals={sequence.textafterkcals}
            textfrom={sequence.textfrom}
            textnumber={sequence.textnumber}
            textpln={sequence.textpln}
            textday={sequence.textday}
            choosebutton={sequence.choosebutton}
            marginLeft={index === 0 ? `${-SequencesWidth * currentSlideNumber}px` : ''}
          />
        ))}
      </div>
    </div>
  );
};
