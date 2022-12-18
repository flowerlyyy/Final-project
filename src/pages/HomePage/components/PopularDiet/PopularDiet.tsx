interface IPopularDietProps {
  imgfood: string;
  text1: string;
  kalori1: String;
  kalori2: string;
  kalori3: string;
  text2: string;
  fromtext: string;
  numbertext: number;
  plntext: string;
  daytext: string;
  choose: string;
}
export const PopularDiet = (props: IPopularDietProps) => {
  const { imgfood, text1, kalori1, kalori2, kalori3, text2, fromtext, numbertext, plntext, daytext, choose } =
    props;
  return (
    <div className="diet">
      <img alt="errorimage" src={imgfood} />
      <p className="textafterpic">{text1}</p>
      <div className="kcals">
        <button className="kcal">{kalori1}</button>
        <button className="kcal">{kalori2} </button>
        <button className="kcal">{kalori3}</button>
      </div>
      <p className="p-taque">{text2}</p>
      <div className="frombutton-box">
        <div className="fromday-box">
          <p className="from-p">{fromtext}</p>
          <p className="numbertext">{numbertext}</p>
          <p className="pln-text">{plntext}</p>
          <p className="day-text">{daytext}</p>
        </div>
        <button className="choose">{choose}</button>
      </div>
    </div>
  );
};
