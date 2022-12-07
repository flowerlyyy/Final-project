import './HomePage.scss';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';

export const HomePage = () => {
  return (
    <>
      <Comments />
      <BoxDiets />
    </>
  );
};
