import './Comments.scss';
import { Comment } from '../Comment/Comment';
import line from '../Comments/CommentImages/Line 6.svg';
import quote from '../Comments/CommentImages/Vector.svg';
import rightarrow from '../Comments/CommentImages/Group 96.svg';

export const Comments = () => {
  const boxes = [
    {
      id: 1,
      userName: 'Guy Hawkins',
      lineSrc: line,
      userMessage:
        'Minima veniam, quis nostrum \n exercitationem ullam corporis suscipit \n laboriosam,nisi ut aliquid ex ea commodi',
      value: 3,
    },
    {
      id: 2,
      userName: 'Esther Howard',
      lineSrc: line,
      value: 5,
      userMessage:
        'Minima veniam, quis nostrum exercitationem \n ullam corporis suscipit laboriosam, nisi ut ',
    },
    {
      id: 3,
      userName: 'Esther Howard',
      lineSrc: line,
      value: 1,
      userMessage:
        'Minima veniam, quis nostrum exercitationem \n ullam corporis suscipit laboriosam, nisi ut \n aliquid ex ea commodi consequatur. Quis ',
    },
    {
      id: 4,
      userName: 'Jacob Jones',
      lineSrc: line,
      value: 4,
      userMessage: 'Minima veniam, quis nostrum exercitationem \n ullam laboriosam, nisi ut aliquid ex ea  ',
    },
  ];

  return (
    <div className="comments narrow-container">
      <div className="mixin">
        <div className="explanation">
          <span className="just-text">We cook – they enjoy every </span>
          <div className="button-text">
            <p className="just-text">minute of their </p>
            <button className="orange">
              <img src={rightarrow} alt="rightarrow" />
            </button>
            <p className="just-text">lives</p>
          </div>
        </div>
        <p className="because">Because we...</p>
        <div className="quote">
          <img src={quote} alt="quote" />
          <p className="quotation">
            We don't accept half-measures and shortcuts, because what we care <br /> about is the WOW effect.
            And all the luck that our efforts are not in <br /> vain. We know this because we closely follow
            the opinions of our <br /> consumers.
          </p>
        </div>
      </div>
      <div className="fourpart">
        {boxes.map((box, index) => (
          <Comment key={index} userName={box.userName} lineSrc={box.lineSrc} userMessage={box.userMessage} rating={box.value} />
        ))}
      </div>
    </div>
  );
};
