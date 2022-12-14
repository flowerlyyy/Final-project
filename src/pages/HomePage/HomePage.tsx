import './HomePage.scss';
import { Comments } from './components/Comments/Comments';
import { Fruits } from './components/Fruits/Fruits';

export const HomePage = () => {
  return (
    <>
      <Fruits />
      <Comments />
    </>
  );
};
