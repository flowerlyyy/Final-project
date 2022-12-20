import { PopularDiets } from './components/PopularDiets/PopularDiets';
import './HomePage.scss';

export const HomePage = () => {

  return (
    <>
      <PopularDiets />
      <Comments />
      <BoxDiets />
      <Questions />
    </>
);
};