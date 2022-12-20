import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { PopularDiets } from './components/PopularDiets/PopularDiets';
import { Questions } from './components/Questions/Questions';
import { TrialDiet } from './components/TrialDiet/TrialDiet';
import './HomePage.scss';

export const HomePage = () => {

  return (
    <>
      <PopularDiets />
      <TrialDiet />
      <Comments />
      <BoxDiets />
      <Questions />
    </>
);
};