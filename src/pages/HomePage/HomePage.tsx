import './HomePage.scss';
import { Questions } from './components/Questions/Questions';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';

export const HomePage = () => {
  return (
    <>
      <Comments />
      <BoxDiets />
      <Questions />
    </>
  );
};
