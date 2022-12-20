interface IDietCardProps {
  imgcookie: string;
  textafterimg: string;
  smallkcal: string;
  mediumkcal: string;
  bigkcal: string;
  textafterkcals: string;
  textfrom: string;
  textnumber: number;
  textpln: string;
  textday: string;
  choosebutton: string;
}
export const DietCard = (props: IDietCardProps) => {
  const {
    imgcookie,
    textafterimg,
    smallkcal,
    mediumkcal,
    bigkcal,
    textafterkcals,
    textfrom,
    textnumber,
    textpln,
    textday,
    choosebutton,
  } = props;
  return (
    <div className="eachdiet">
      <img src={imgcookie} alt="errorimage" />
      <p className="textafterpic1">{textafterimg}</p>
      <div className="secondkcals">
        <div className="secondkcal">{smallkcal}</div>
        <div className="secondkcal">{mediumkcal}</div>
        <div className="secondkcal">{bigkcal}</div>
      </div>
      <p className="textafterkcals2">{textafterkcals}</p>
      <div className="frombutton2">
        <div className="fromday-box2">
          <p className="fromtext">{textfrom}</p>
          <p className="number-p">{textnumber}</p>
          <p className="plntext">{textpln}</p>
          <p className="daytext">{textday}</p>
        </div>
        <button className="choose-btn">{choosebutton}</button>
      </div>
    </div>
  );
};
