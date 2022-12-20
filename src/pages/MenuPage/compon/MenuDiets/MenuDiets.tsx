import '../MenuDiets/MenuDiets.scss';
import { MenuDiet } from '../MenuDiet/MenuDiet';
import eggicon from '../MenuDiets/MenuImages/eggs icon.png';
import eighthimage from '../MenuDiets/MenuImages/Mask group 8.png';
import fifthimage from '../MenuDiets/MenuImages/Mask group 5.png';
import firstimage from '../MenuDiets/MenuImages/Mask group 1.png';
import forthimage from '../MenuDiets/MenuImages/Mask group 4.png';
import leaficon from '../MenuDiets/MenuImages/leaf.png';
import nuticon from '../MenuDiets/MenuImages/nuts icon.png';
import secondimage from '../MenuDiets/MenuImages/Mask group 2.png';
import seventhimage from '../MenuDiets/MenuImages/Mask group 7.png';
import sixthimage from '../MenuDiets/MenuImages/Mask group 6.png';
import thirdimage from '../MenuDiets/MenuImages/Mask group 3.png';
export const MenuDiets = () => {
  const menus = [
    {
      id: 1,
      point: 4.8,
      foodSrc: firstimage,
      timeButton: 'Breakfast',
      firstSentence: 'Molestiae sed augue eu sapien \n hendrerit fringilla',
      kalori: '420 kcal',
      secondSentence: 'Taque earum rerum hic tenetur a sapiente',
      diet: 'Diet:',
      type: 'Slim',
      leafSrc: leaficon,
      nutSrc: nuticon,
      eggSrc: eggicon,
    },
    {
      id: 2,
      point: 4.8,
      foodSrc: secondimage,
      timeButton: 'Lunch',
      firstSentence: 'Vel illum condimentum, risus et',
      kalori: '254 kcal',
      secondSentence: 'Ut aut reiciendis voluptatibus maiores alias \n consequatur aut',
      diet: 'Diet:',
      type: 'Vegan',
      leafSrc: leaficon,
      nutSrc: nuticon,
    },
    {
      id: 3,
      point: 4.7,
      foodSrc: thirdimage,
      timeButton: 'Snacks',
      firstSentence: 'Eum fugiat nulla gravida magna ',
      kalori: '298 kcal',
      secondSentence: 'Perferendis doloribus asperiores repellat',
      diet: 'Diet:',
      type: 'Slim',
      leafSrc: leaficon,
      nutSrc: nuticon,
      eggSrc: eggicon,
    },
    {
      id: 4,
      point: 4.7,
      foodSrc: forthimage,
      timeButton: 'Breakfast',
      firstSentence: 'Molestiae ultrices',
      kalori: '182 kcal',
      secondSentence: 'libero tempore, cum soluta nobis est \n eligendi ',
      diet: 'Diet:',
      type: 'Dla mam',
      leafSrc: leaficon,
      nutSrc: nuticon,
      eggSrc: eggicon,
    },
    {
      id: 5,
      point: 4.7,
      foodSrc: fifthimage,
      timeButton: 'Dinner',
      firstSentence: 'Molestiae dapibus turpis',
      kalori: '410 kcal',
      secondSentence: 'Taque earum rerum hic tenetur a sapiente ',
      diet: 'Diet:',
      type: 'Fit',
      leafSrc: leaficon,
      eggSrc: eggicon,
    },
    {
      id: 6,
      point: 4.7,
      foodSrc: sixthimage,
      timeButton: 'Lunch',
      firstSentence: 'Vel illum odio ultricies, nec \n sollicitudin eros',
      kalori: '240 kcal',
      secondSentence: 'Ut aut reiciendis voluptatibus maiores alias \n consequatur aut',
      diet: 'Diet:',
      type: 'Vegan',
      leafSrc: leaficon,
      nutSrc: nuticon,
    },
    {
      id: 7,
      point: 4.7,
      foodSrc: seventhimage,
      timeButton: 'Lunch',
      firstSentence: 'Eum fugiat accumsan, sapien vel',
      kalori: '322 kcal',
      secondSentence: 'Perferendis doloribus asperiores repellat ',
      diet: 'Diet:',
      type: 'Keto',
      leafSrc: leaficon,
      nutSrc: nuticon,
      eggSrc: eggicon,
    },
    {
      id: 8,
      point: 4.7,
      foodSrc: eighthimage,
      timeButton: 'Dinner',
      firstSentence: 'Оlestiae placerat orci vel arc',
      kalori: '388 kcal',
      secondSentence: 'libero tempore, cum soluta nobis est \n eligendi  ',
      diet: 'Diet:',
      type: 'Office box',
      leafSrc: leaficon,
      nutSrc: nuticon,
      eggSrc: eggicon,
    },
  ];

  return (
    <div className="menu narrow-container">
      <div className="selected-buttons">
        <h1 className="header-menu">Menu</h1>
        <div className="button-choose">
          <div className="button-clicks">
            <button className="top-button">Top rated</button>
            <button className="eating-times">Breakfast</button>
            <button className="eating-times">II Breakfast</button>
            <button className="eating-times">Lunch</button>
            <button className="eating-times">Snacks</button>
            <button className="eating-times">Dinner</button>
          </div>
          <div className="choice">
            <p className="choosen">Choose a diet:</p>
            <select className="choose-a-diet">
              <option value="food">All</option>
              <option value="food">Slim</option>
              <option value="food">Vegan</option>
              <option value="food">Dla mam</option>
              <option value="food">Fit</option>
              <option value="food">Keto</option>
              <option value="food">Office box</option>
            </select>
          </div>
        </div>
      </div>
      <div className="food-lists">
        {menus.map((menu, index) => (
          <MenuDiet
            key={index}
            point={menu.point}
            foodSrc={menu.foodSrc}
            timeButton={menu.timeButton}
            firstSentence={menu.firstSentence}
            kalori={menu.kalori}
            secondSentence={menu.secondSentence}
            diet={menu.diet}
            type={menu.type}
            leafSrc={menu.leafSrc}
            nutSrc={menu.nutSrc}
            eggSrc={menu.eggSrc}
          />
        ))}
      </div>
      <div className="see-more">
        <span className="showing-more">See more</span>
        <div className="last-line"></div>
      </div>
    </div>
  );
};
