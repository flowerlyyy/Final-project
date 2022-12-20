import './Comments.scss';
import { Comment } from '../Comment/Comment';
import line from './CommentImages/Line 6.svg';
import quote from './CommentImages/Vector.svg';
import rightarrow from './CommentImages/arrow right.svg';

export const Comments = () => {
  const boxes = [
    {
      id: 1,
      userName: 'Guy Hawkins',
      lineSrc: line,
      userMessage:
        'Minima veniam, quis nostrum \n exercitationem ullam corporis suscipit \n laboriosam,nisi ut aliquid ex ea commodi',
    },
    {
      id: 2,
      userName: 'Esther Howard',
      lineSrc: line,
      userMessage:
        'Minima veniam, quis nostrum exercitationem \n ullam corporis suscipit laboriosam, nisi ut ',
    },
    {
      id: 3,
      userName: 'Esther Howard',
      lineSrc: line,
      userMessage:
        'Minima veniam, quis nostrum exercitationem \n ullam corporis suscipit laboriosam, nisi ut \n aliquid ex ea commodi consequatur. Quis ',
    },
    {
      id: 4,
      userName: 'Jacob Jones',
      lineSrc: line,
      userMessage: 'Minima veniam, quis nostrum exercitationem \n ullam laboriosam, nisi ut aliquid ex ea  ',
    },
  ];

  return (
    <div className="comments narrow-container">
      <div className="mixin">
        <p className="explanation">
          We cook – they enjoy every <br /> minute of their
          <img className="rightarrow" src={rightarrow} alt="yellow-arrow" />
          lives
        </p>
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
          <Comment key={index} userName={box.userName} lineSrc={box.lineSrc} userMessage={box.userMessage} />
        ))}
      </div>
    </div>
  );
};
