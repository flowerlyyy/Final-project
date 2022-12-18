import '../DietsPage/DietsPage.scss';
import Formoms from './Mask group For moms.svg';
import Line22 from './Line 1.svg';
import Line23 from './Line2.svg';
import LowIG from './Mask group Low IG.svg';
import MaskgroupGym from './Mask group Gym.svg';
import Maskgroupfit from './Mask group fit.svg';
import Maskgroupketo from './Mask group keto.svg';
import Maskgroupslim from './Mask group slim.svg';
import Maskgroupvegan from './Mask group vegan.svg';
import Officebox from './Mask group Office box.svg';
import leaves1 from './leaves1.svg';
import leaves2 from './leaves2.svg';
import { DietPage } from '../DietPage/DietPage';

export const DietsPage = () => {
  const products = [
    {
      id: 1,
      imgcookie: Maskgroupslim,
      textafterimg: 'Slim',
      smallkcal: '1000 kcal',
      mediumkcal: '1300 kcal',
      bigkcal: '1500 kcal',
      textafterkcals:
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribusasperiores...',
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
      id: 3,
      imgcookie: Maskgroupvegan,
      textafterimg: 'Vegan',
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
        'Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribusasperiores...',
      textfrom: 'from',
      textnumber: 62,
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
  return (
    <>
      <div className="eight-diets narrow-container">
        <p className="p-diets">Diets</p>
        <div className="eightdiets">
          {products.map((product, index) => (
            <DietPage
              key={index}
              imgcookie={product.imgcookie}
              textafterimg={product.textafterimg}
              smallkcal={product.smallkcal}
              mediumkcal={product.mediumkcal}
              bigkcal={product.bigkcal}
              textafterkcals={product.textafterkcals}
              textfrom={product.textfrom}
              textnumber={product.textnumber}
              textpln={product.textpln}
              textday={product.textday}
              choosebutton={product.choosebutton}
            />
          ))}
        </div>
      </div>
      <div className="cant-choose-diet narrow-container">
        <img src={Line22} alt="linerror" />
        <div className="choose-yourdiet">
          <img className="leaves-left" src={leaves1} alt="leaves" />
          <div className="center-choose-diet">
            <h2 className="trial-h2">Can't you choose your diet?</h2>
            <p className="anydiet-p">
              We'll try to help you! Take advantage of the free advice of a nutritionist and choose the
              perfect kit for yourself
            </p>
            <button className="choose-diet-button">Adjust diet</button>
          </div>
          <img className="leaves-right" src={leaves2} alt="leaves" />
        </div>
        <img src={Line23} alt="linerror" />
      </div>
    </>
  );
};
