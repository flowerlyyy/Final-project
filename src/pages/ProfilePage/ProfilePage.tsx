import './ProfilePage.scss';
import { Images } from './components/Images/Images';
import { RootState } from '../../store/store';
import { baseUrl } from '../../constants';
import { loadUser } from '../TestPage/testPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import profile from './profilepic.png';
export const ProfilePage = () => {
  let number = 0;
  const profilePageState = useSelector((state: RootState) => state.profilePage);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/users`)
      .then((response) => response.json())
      .then((data) => dispatch(loadUser({ name: 'Javid', lastName: 'Hatamov' })));
  }, []);

  return (
    <div className="profile-page">
      <div className="content-of-profile">
        <div className="data-about-user">
          <img id="profile-image" srcSet={profile} alt="profile" />
          {profilePageState.currentUser && (
            <div className="all-data-text">
              <p>
                {profilePageState.currentUser.name} {profilePageState.currentUser.lastName}
              </p>
              {<p>Favorite Dishes :{profilePageState.favoriteDishes}</p>}
            </div>
          )}

          <button className="change-data">Edit Profile</button>
        </div>
        <div className="images-of-user">
          {profilePageState.images.map((image) => (
            <Images srcImage={profilePageState.images[number++]} key={number} />
          ))}
        </div>
      </div>
    </div>
  );
};
