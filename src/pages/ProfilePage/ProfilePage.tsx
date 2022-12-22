import './ProfilePage.scss';
import { Images } from './components/Images/Images';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import profile from './profilepic.png';
export const ProfilePage = () => {
  let number = 0;
  const profilePageState = useSelector((state: RootState) => state.profilePage);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`${baseUrl}/users`)
  //     .then((response) => response.json())
  //     .then((data) => dispatch(loadUser({ currentUser: data })));
  // }, []);

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
              {/* { <p>Balance :{profilePageState.currentUser.balance}</p> } */}
            </div>
          )}

          <button className="change-data">Edit Profile</button>
        </div>
        <div className="images-of-user">
          {profilePageState.images.map((image) => (
            <Images srcImage={profilePageState.images[number++]} />
          ))}
          {/* <Images
            srcImage={
              'https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480'
            }
          /> */}
        </div>
      </div>
      {/* //{' '} */}
    </div>
  );
};
