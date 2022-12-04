import './PopularDiets.scss';
import arrowleft from './arrow left.svg'
import arrowright from './arrow right.svg'
import Maskgroupslim from './Mask group slim.svg'
import Maskgroupfit from './Mask group fit.svg'
import Maskgroupvegan from './Mask group vegan.svg'
import Maskgroupketo from './Mask group keto.svg'

export const PopularDiets= () =>{
    return(
        <div className="PopularDiets narrow-container">
        <p className="themost">The most popular diets</p>
        <div className="arrows">
            <button className="arrow1"><img className="picarrow1" src={arrowleft}/></button>
            <button className="arrow2"><img className="picarrow2" src={arrowright}/></button>
        </div>
        <div className="fourdiets">
            <div className="diet">
               <img src={Maskgroupslim} />
               <p className="slim">Slim</p>
               <div className="kcals">
                    <button className="kcal">1000 kcal</button>
                    <button className="kcal">1300 kcal</button>
                    <button className="kcal">1500 kcal</button>
               </div>
               <p className="taque">Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...</p>
               <div className="frombutton">
                <div className="fromday">
                    <p className="from">from</p>
                    <p className="num">57</p>
                    <p className="pln">pln</p>
                    <p className="day"> /day</p>
                </div>
                <button className="choose">Choose</button>
               </div>
            </div>
            <div className="diet">
                <img src={Maskgroupfit} /> 
                <p className="slim">Fit</p>
                <div className="kcals">
                     <button className="kcal">1800 kcal</button>
                     <button className="kcal">2000 kcal</button>
                     <button className="kcal">2500 kcal</button>
                </div>
                <p className="taque">Taque earum rerum hic tenetur a sapiente maiores...</p>
                <div className="frombutton">
                 <div className="fromday">
                     <p className="from">from</p>
                     <p className="num">65</p>
                     <p className="pln">pln</p>
                     <p className="day"> /day</p>
                 </div>
                 <button className="choose">Choose</button>
                </div>
             </div>
             <div className="diet">
                <img src={Maskgroupvegan} /> 
                <p className="slim">Vegan</p>
                <div className="kcals">
                     <button className="kcal">1300 kcal</button>
                     <button className="kcal">1500 kcal</button>
                     <button className="kcal">2000 kcal</button>
                </div>
                <p className="taque">Taque earum rerum hic tenetur a sapiente maiores alias consequatur...</p>
                <div className="frombutton">
                 <div className="fromday">
                     <p className="from">from</p>
                     <p className="num">59</p>
                     <p className="pln">pln</p>
                     <p className="day"> /day</p>
                 </div>
                 <button className="choose">Choose</button>
                </div>
             </div>
             <div className="diet">
                <img src={Maskgroupketo} /> 
                <p className="slim">Keto</p>
                <div className="kcals">
                     <button className="kcal">1300 kcal</button>
                     <button className="kcal">1500 kcal</button>
                     <button className="kcal">2000 kcal</button>
                </div>
                <p className="taque">Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...</p>
                <div className="frombutton">
                 <div className="fromday">
                     <p className="from">from</p>
                     <p className="num">62</p>
                     <p className="pln">pln</p>
                     <p className="day"> /day</p>
                 </div>
                 <button className="choose">Choose</button>
                </div>
             </div>
        </div>
    </div>
    );
    };
