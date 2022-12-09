import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from '../pages/Header/headerSlice';
import { profilePageReducer } from '../pages/ProfilePage/profilePageSlice';
import { signinPageReducer } from '../pages/SigninPage/signinPageSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
  reducer: {
    testPage: testPageReducer,
    header: headerReducer,
    profilePage: profilePageReducer,
    signinPageState: signinPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
