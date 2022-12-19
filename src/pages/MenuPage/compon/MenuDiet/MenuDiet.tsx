interface IMenuProps {
  point: number;
  foodSrc: string;
  timeButton: string;
  firstSentence: string;
  kalori: string;
  secondSentence: string;
  diet: string;
  type: string;
  leafSrc?: string;
  nutSrc?: string;
  eggSrc?: string;
}

export const MenuDiet = (props: IMenuProps) => {
  const {
    point,
    diet,
    eggSrc,
    firstSentence,
    foodSrc,
    kalori,
    leafSrc,
    nutSrc,
    secondSentence,
    timeButton,
    type,
  } = props;
  return (
    <div className="diet-box">
      <div className="rating-score">{point}</div>
      <img className="diet-food-image" src={foodSrc} alt="first" />
      <button className="break-time">{timeButton}</button>
      <div className="menu-text">
        <div className="first-paragraph">
          <span className="first-paragraph-sentence">{firstSentence}</span>
          <span className="first-paragraph-kalori">{kalori}</span>
        </div>
        <span className="second-paragraph">{secondSentence}</span>
        <div className="last-paragraph">
          <div className="diet-menu-type">
            <p className="diet-word">{diet}</p>
            <p className="diet-type">{type}</p>
          </div>
          <div className="symbols">
            {leafSrc && <img src={leafSrc} alt=''/>}
            {nutSrc && <img src={nutSrc} alt=''/>}
            {eggSrc && <img src={eggSrc} alt=''/>}
          </div>
        </div>
      </div>
    </div>
  );
};
