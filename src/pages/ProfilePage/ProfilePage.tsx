import './ProfilePage.scss';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import profile from './profilepic.png';
export const ProfilePage = () => {
  const profilePageState = useSelector((state: RootState) => state.profilePage);
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
              <p>Favourite Dish</p>
              <p>{profilePageState.currentUser.balance}</p>
            </div>
          )}

          <button className="change-data">Edit Profile</button>
        </div>
        <div className="images-of-user">
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
          <div className="item">
            <img
              src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480"
              alt="sample"
              className="image-grid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
