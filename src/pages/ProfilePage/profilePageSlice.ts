import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { register } from '../SignupPage/signupPageSlice';

interface ProfilePageState {
  currentUser: User | undefined;
  favoriteDishes: string[];
  images: string[];
}
// interface ProfilePagePayload{
//   name:string;
//   last
// }

const initialState: ProfilePageState = {
  currentUser: undefined,
  favoriteDishes: [],
  images: [],
};
interface LoadUserPayload {
  currentUser: User | undefined;
  favoriteDishes: string[];
  images: string[];
}
export const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState: initialState,
  reducers: {
    // loadUser: (state, action: PayloadAction<LoadUserPayload>) => {
    //   state.currentUser = action.payload.currentUser;
    // state.favoriteDishes = action.payload.favoriteDishes;
    //   state.images = action.payload.images;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(register, (state, action) => {
      const payload = action.payload;
      const user: User = {
        id: 4,
        name: payload.name,
        lastName: payload.lastName,
        // avatar: '',
        // balance: 1234,
        // email: payload.email,
        //Actually images is empty but I give some urls for checking purpose
      };
      const favoriteDishes = ['sushi', ' ', 'stake'];
      const images = [
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        'https://www.shorturl.at/img/shorturl-icon.png',
        'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554__340.png',
        'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-url-small-icon-opened-in-the-browser-image_1132270.jpg',
        'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        'https://www.shorturl.at/img/shorturl-icon.png',
        'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554__340.png',
        'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-url-small-icon-opened-in-the-browser-image_1132270.jpg',
      ];
      state.currentUser = user;
      state.favoriteDishes = favoriteDishes;
      state.images = images;
    });
  },
});
// export const {} = profilePageSlice.actions;
export const profilePageReducer = profilePageSlice.reducer;
