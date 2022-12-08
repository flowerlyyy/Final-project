import './HomePage.scss';
import { Questions } from './components/Questions/Questions';
import { BoxDiets } from './components/BoxDiets/BoxDiets';
import { Comments } from './components/Comments/Comments';
import { Blog } from './components/Blog/Blog';
import React from 'react';

export const HomePage = () => {
  return (
    <>
      <Comments />
      <BoxDiets />
      <Blog/>
      <Questions />
    </>
  );
};
