import './HomePage.scss';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { Fruits } from './components/Fruits/Fruits';
import { PopularDiets } from './components/PopularDiets/PopularDiets';
import { Questions } from './components/Questions/Questions';
import { WhereDeliver } from './components/WhereDeliver/WhereDeliver';
import { TrialDiet } from './components/TrialDiet/TrialDiet';

export const HomePage = () => {
  return (
    <>
      <Fruits />
      <Comments />
      <PopularDiets />
      <TrialDiet />
      <WhereDeliver />
      <Comments />
      <BoxDiets />
      <Questions />
    </>
  );
};
