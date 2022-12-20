import { configureStore } from '@reduxjs/toolkit';
import { headerReducer } from '../pages/Header/headerSlice';
import { profilePageReducer } from '../pages/ProfilePage/profilePageSlice';
import { signupPageReducer } from '../pages/SignupPage/signupPageSlice';
import { testPageReducer } from '../pages/TestPage/testPageSlice';

export const store = configureStore({
  reducer: {
    testPage: testPageReducer,
    header: headerReducer,
    profilePage: profilePageReducer,
    signupPageState: signupPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;