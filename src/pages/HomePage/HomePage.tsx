import './HomePage.scss';
import { Questions } from './components/Questions/Questions';
import { BoxDiets } from './components/BoxDiets/BoxDiets';

export const HomePage = () => {
  return (
    <>
      <BoxDiets />
      <Questions />
    </>
  );
};
