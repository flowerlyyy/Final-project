import { configureStore } from '@reduxjs/toolkit';
import { testPageReducer } from '../TestPage/testPageSlice';

export const store = configureStore({
  reducer: {
    testPage: testPageReducer,
    //cartPage: cartPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;