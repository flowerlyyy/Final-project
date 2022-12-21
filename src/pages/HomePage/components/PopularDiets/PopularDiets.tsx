import './PopularDiets.scss';
import { DietCard } from '../../../../components/DietCard/DietCard';
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
          />
        ))}
      </div>
    </div>
  );
};
