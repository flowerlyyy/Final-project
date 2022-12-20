import { Rating } from '../Rating/Rating';

interface ICommentProps {
  userName: string;
  lineSrc: string;
  userMessage: string;
}

export const Comment = (props: ICommentProps) => {
  const { userName, lineSrc, userMessage } = props;
  return (
    <div className="comment-box">
      <Rating
        zeroData={'0'}
        firstData={'1'}
        secondData={'2'}
        thirdData={'3'}
        forthData={'4'}
        fifthData={'5'}
        star={'★'}
      />
      <div className="grey-text">
        <div className="surname">
          <h3 className="name">{userName} </h3>
          <img className="just-line" src={lineSrc} alt="line" />
        </div>
        <p className="message">{userMessage}</p>
      </div>
    </div>
  );
};
