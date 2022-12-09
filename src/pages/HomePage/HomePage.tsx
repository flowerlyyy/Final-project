import { PopularDiets } from './components/PopularDiets/PopularDiets';
import { TrialDiet } from './components/TrialDiet/TrialDiet';
import { WhereDeliver } from './components/WhereDeliver/WhereDeliver';
import './HomePage.scss';

export const HomePage = () => {
return(
    <>
    <PopularDiets />;
    <WhereDeliver />;
    <TrialDiet />;
    </>
);
};