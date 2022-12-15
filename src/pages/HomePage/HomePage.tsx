import './HomePage.scss';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { PopularDiets } from './components/PopularDiets/PopularDiets';
import { Questions } from './components/Questions/Questions';
import { Fruits } from './components/Fruits/Fruits';

export const HomePage = () => {
  return (
    <>
      <Fruits />
      <Comments />
      <PopularDiets />
      <BoxDiets />
      <Questions />
    </>
  );
};
