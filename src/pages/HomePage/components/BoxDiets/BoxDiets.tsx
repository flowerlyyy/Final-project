import './BoxDiets.scss';
import img5 from '../BoxDiets/group91.png';
import img6 from '../BoxDiets/group92.png';
import img7 from '../BoxDiets/group93.png';
import img8 from '../BoxDiets/group94.png';
import React from 'react';

interface DietBoxProp {
  title: string;
  img: string;
  description: string;
}

const boxes = [
{
  title:'Fresh ingredients',
  img: img5,
  description: 'Donec in nisl porttitor, blandit augue in, ullamcorper felis',
},{
  title: 'Taste',
  img: img6,
  description: 'Apibus sed erat nec volutpat. Interdum et malesuada',
},{ 
  title: 'Diversity',
  img: img7,
  description: 'Proin hendrerit molestie placerat ec ante congue placerat non sed',
},{
  title:'Match',
  img: img8,
  description:'Vivamus blandit, lorem non venenatis luctus, leo dui volutpat purusquis tinci',
}
];

const DietBox = ({title, img, description,}:DietBoxProp) => {
  return (
      <div className="box-box">                                         
      <img className="symbol" src={img} alt="" />
      <div className="diet-text">
        <h4>{title}</h4>
        <p className="diet-p">{description}</p>
      </div>
    </div> 
  )
}

export const BoxDiets = () => { 
  return (
    <div className="box-diet blog-container">
      <h2 className='box-diet-h2'>Box diets with which you get more</h2>  
      <div className="boxes">         
          {
            boxes.map((box, index)=> (
              <DietBox 
               title={box.title}
               img={box.img}
               description={box.description}
                />
            ))
          }
      </div> 
    </div>
  );
};
