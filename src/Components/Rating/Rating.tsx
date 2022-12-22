import { FaStar } from 'react-icons/fa';

interface IRatingProps {
  value: number;
}

export const Rating = ({ value }: IRatingProps) => {
  const yellowStarsCount = Math.ceil(value);
  const grayStarsCount = 5 - yellowStarsCount;

  const yellowStars = [];
  const grayStars = [];

  for (let i = 0; i < yellowStarsCount; i++) {
    yellowStars.push(<FaStar className="star" color="#ffc107" size={30} />);
  }

  for (let i = 0; i < grayStarsCount; i++) {
    grayStars.push(<FaStar className="star" color="#e4e5e9" size={30} />);
  }

  return (
    <div className="rating">
      {yellowStars}
      {grayStars}
    </div>
  );
};
