import './HomePage.scss';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { Fruits } from './components/Fruits/Fruits';
import { PopularDiets } from './components/PopularDiets/PopularDiets';
import { Questions } from './components/Questions/Questions';
import { TrialDiet } from './components/TrialDiet/TrialDiet';
import { WhereDeliver } from './components/WhereDeliver/WhereDeliver';

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
