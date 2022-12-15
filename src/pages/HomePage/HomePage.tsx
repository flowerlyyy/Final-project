import { PopularDiets } from './components/PopularDiets/PopularDiets';
import './HomePage.scss';
import { Questions } from './components/Questions/Questions';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { Fruits } from './components/Fruits/Fruits';

export const HomePage = () => {

  return (
    <>
    <Fruits/>
      <PopularDiets />
      <Comments />
      <BoxDiets />
      <Questions />
    </>
  );
};
