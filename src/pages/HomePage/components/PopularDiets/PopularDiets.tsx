import './PopularDiets.scss';
import { PopularDiet } from '../PopularDiet/PopularDiet';
import Maskgroupfit from './Mask group fit.svg';
import Maskgroupketo from './Mask group keto.svg';
import Maskgroupslim from './Mask group slim.svg';
import Maskgroupvegan from './Mask group vegan.svg';
import arrowleft from './arrow left.svg';
import arrowright from './arrow right.svg';

export const PopularDiets = () => {
  const sequences = [
    {
      id: 1,
      imgfood: Maskgroupslim,
      text1: 'Slim',
      kalori1: '1000 kcal',
      kalori2: '1300 kcal',
      kalori3: '1500 kcal',
      text2:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...',
      fromtext: 'from',
      numbertext: 57,
      plntext: 'pln',
      daytext: '/day',
      choose: 'Choose',
    },
    {
      id: 2,
      imgfood: Maskgroupfit,
      text1: 'Fit',
      kalori1: '1800 kcal',
      kalori2: '2000 kcal',
      kalori3: '2500 kcal',
      text2: 'Taque earum rerum hic tenetur a sapiente maiores...',
      fromtext: 'from',
      numbertext: 65,
      plntext: 'pln',
      daytext: '/day',
      choose: 'Choose',
    },
    {
      id: 2,
      imgfood: Maskgroupvegan,
      text1: 'Veqan',
      kalori1: '1300 kcal',
      kalori2: '1500 kcal',
      kalori3: '2000 kcal',
      text2: 'Taque earum rerum hic tenetur a sapiente maiores alias consequatur...',
      fromtext: 'from',
      numbertext: 59,
      plntext: 'pln',
      daytext: '/day',
      choose: 'Choose',
    },
    {
      id: 4,
      imgfood: Maskgroupketo,
      text1: 'Keto',
      kalori1: '1300 kcal',
      kalori2: '1500 kcal',
      kalori3: '2000 kcal',
      text2:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...',
      fromtext: 'from',
      numbertext: 57,
      plntext: 'pln',
      daytext: '/day',
      choose: 'Choose',
    },
  ];
  return (
    <div className="popular-diets narrow-container">
      <p className="themost">The most popular diets</p>
      <div className="arrows">
        <button className="arrow1">
          <img alt="errorimage" className="picarrow1" src={arrowleft} />
        </button>
        <button className="arrow2">
          <img alt="errorimage" className="picarrow2" src={arrowright} />
        </button>
      </div>
      <div className="fourdiets">
        {sequences.map((sequence, index) => (
          <PopularDiet
          key={index}
            imgfood={sequence.imgfood}
            text1={sequence.text1}
            kalori1={sequence.kalori1}
            kalori2={sequence.kalori2}
            kalori3={sequence.kalori3}
            text2={sequence.text2}
            fromtext={sequence.fromtext}
            numbertext={sequence.numbertext}
            plntext={sequence.plntext}
            daytext={sequence.daytext}
            choose={sequence.choose}
          />
        ))}
      </div>
    </div>
  );
};
