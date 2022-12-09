import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SigninPageState {}

const initialState: SigninPageState = {};

interface RegisterPayload {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const signinPageSlice = createSlice({
  name: 'signinPage',
  initialState: initialState,
  reducers: {
    register: (_state, _action: PayloadAction<RegisterPayload>) => {},
  },
});

export const { register } = signinPageSlice.actions;

export const signinPageReducer = signinPageSlice.reducer;
