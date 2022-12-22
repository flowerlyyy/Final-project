interface IRatingProps {
    zeroData: string;
    firstData: string;
    secondData: string;
    thirdData: string;
    forthData: string;
    fifthData: string;
    star: string;
  }
  
  export const Rating = (props: IRatingProps) => {
    const { zeroData, firstData, secondData, thirdData, forthData, fifthData, star } = props;
    return (
      <div className="rating" data-total-value={zeroData}>
        <div className="stars" data-item-value={fifthData}>
          {star}
        </div>
        <div className="stars" data-item-value={forthData}>
          {star}
        </div>
        <div className="stars" data-item-value={thirdData}>
          {star}
        </div>
        <div className="stars" data-item-value={secondData}>
          {star}
        </div>
        <div className="stars" data-item-value={firstData}>
          {star}
        </div>
      </div>
    );
  };
  