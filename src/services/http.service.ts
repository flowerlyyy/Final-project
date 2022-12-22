import { Dispatch } from '@reduxjs/toolkit';
import { User } from '../models/User';
import { baseUrl } from '../constants';
import { logIn } from '../store/currentUserSlice';

export const sendHttpRequest = (
  path: string,
  dispatch: Dispatch,
  action: any,
  body: any,
  method: string = 'GET',
) => {
  const options: RequestInit = {
    method: method,
    headers: {},
  };
  const authToken=
  fetch(`${baseUrl}${path}`, options)
    .then((response) => response.json())
    .then((data: User) => dispatch(logIn({ user: data })));
};
