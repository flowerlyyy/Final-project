import { Rating } from '../../../../Components/Rating/Rating';

interface ICommentProps {
  userName: string;
  lineSrc: string;
  userMessage: string;
  rating: number;
}

export const Comment = (props: ICommentProps) => {
  const { userName, lineSrc, userMessage, rating } = props;
  return (
    <div className="comment-box">
      <Rating value={rating} />
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
