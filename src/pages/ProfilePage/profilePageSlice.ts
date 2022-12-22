import { User } from '../../models/User';
import { createSlice } from '@reduxjs/toolkit';
import { register } from '../SignupPage/signupPageSlice';

interface ProfilePageState {
  currentUser: User | undefined;
  favoriteDishes: string;
}

const initialState: ProfilePageState = {
  currentUser: undefined,
  favoriteDishes: '',
};

export const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register, (state, action) => {
      const payload = action.payload;
      const user: User = {
        id: 4,
        name: payload.name,
        lastName: payload.lastName,
        avatar: '',
        balance: 1234,
        email: payload.email,
      };
      state.currentUser = user;
    });
  },
});

export const profilePageReducer = profilePageSlice.reducer;
