import { PopularDiets } from './components/PopularDiets/PopularDiets';
import './HomePage.scss';
import { Questions } from './components/Questions/Questions';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { WhereDeliver } from './components/WhereDeliver/WhereDeliver';

export const HomePage = () => {

  return (
    <>
      <PopularDiets />
      <WhereDeliver />
      <Comments />
      <BoxDiets />
      <Questions />
    </>
);
};
