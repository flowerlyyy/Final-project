import './Comments.scss';
import line from '../Comments/CommentImages/Line 6.svg';
import quote from '../Comments/CommentImages/Vector.svg';
import rightarrow from '../Comments/CommentImages/arrow right.svg';

export const Comments = () => {
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
        <div className="comment-box">
          <div className="rating" data-total-value="0">
            <div className="stars" data-item-value="5">
              ★
            </div>
            <div className="stars" data-item-value="4">
              ★
            </div>
            <div className="stars" data-item-value="3">
              ★
            </div>
            <div className="stars" data-item-value="2">
              ★
            </div>
            <div className="stars" data-item-value="1">
              ★
            </div>
          </div>
          <div className="grey-text">
            <div className="surname">
              <h3 className="name">Guy Hawkins </h3>
              <img className="just-line" src={line} alt="" />
            </div>
            <p className="message">
              Minima veniam, quis nostrum <br /> exercitationem ullam corporis suscipit <br /> laboriosam,
              nisi ut aliquid ex ea commodi{' '}
            </p>
          </div>
        </div>

        <div className="comment-box">
          <div className="rating" data-total-value="0">
            <div className="stars" data-item-value="5">
              ★
            </div>
            <div className="stars" data-item-value="4">
              ★
            </div>
            <div className="stars" data-item-value="3">
              ★
            </div>
            <div className="stars" data-item-value="2">
              ★
            </div>
            <div className="stars" data-item-value="1">
              ★
            </div>
          </div>
          <div className="grey-text">
            <div className="surname">
              <h3 className="name">Esther Howard</h3>
              <img className="just-line" src={line} alt="" />
            </div>
            <p className="message">
              Minima veniam, quis nostrum exercitationem <br /> ullam corporis suscipit laboriosam, nisi ut{' '}
            </p>
          </div>
        </div>

        <div className="comment-box">
          <div className="rating" data-total-value="0">
            <div className="stars" data-item-value="5">
              ★
            </div>
            <div className="stars" data-item-value="4">
              ★
            </div>
            <div className="stars" data-item-value="3">
              ★
            </div>
            <div className="stars" data-item-value="2">
              ★
            </div>
            <div className="stars" data-item-value="1">
              ★
            </div>
          </div>
          <div className="grey-text">
            <div className="surname">
              <h3 className="name">Esther Howard</h3>
              <img className="just-line" src={line} alt="" />
            </div>
            <p className="message">
              Minima veniam, quis nostrum exercitationem <br />
              ullam corporis suscipit laboriosam, nisi ut <br /> aliquid ex ea commodi consequatur. Quis{' '}
            </p>
          </div>
        </div>

        <div className="comment-box">
          <div className="rating" data-total-value="0">
            <div className="stars" data-item-value="5">
              ★
            </div>
            <div className="stars" data-item-value="4">
              ★
            </div>
            <div className="stars" data-item-value="3">
              ★
            </div>
            <div className="stars" data-item-value="2">
              ★
            </div>
            <div className="stars" data-item-value="1">
              ★
            </div>
          </div>
          <div className="grey-text">
            <div className="surname">
              <h3 className="name">Jacob Jones</h3>
              <img className="just-line" src={line} alt="line" />
            </div>
            <p className="message">
              Minima veniam, quis nostrum exercitationem <br /> ullam laboriosam, nisi ut aliquid ex ea
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};
