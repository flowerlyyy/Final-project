import '../DietsPage/DietsPage.scss';
import { ChooseDiet } from './Components/ChooseDiet/ChooseDiet';
import { DietsCard } from './Components/DietsCard/DietsCard';
export const DietsPage = () => {
  return (
    <>
      <DietsCard />
      <ChooseDiet />
    </>
  );
};
