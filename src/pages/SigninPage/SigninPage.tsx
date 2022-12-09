import '../SigninPage/SigninPage.scss';
import { Link } from 'react-router-dom';
import { register } from './signinPageSlice';
import { useDispatch } from 'react-redux';
import image from '../SigninPage/saveit(2).jpg';

export const SigninPage = () => {
  const dispatch = useDispatch();
  const registerClickHandler = () =>
    dispatch(register({ name: 'Javid', lastName: 'Hatamov', email: 'mail@example.com', password: '12345' }));

  return (
    <>
      <div className="sign-in">
        <img srcSet={image} id="tomato-salad" alt="main-tomato" />
        <div className="yellow-block">
          <form action="">
            <div className="content-of-form">
              <div className="input-part centered">
                <h2>Sign up</h2>
                <div className="inputs">
                  <div className="label-input">
                    <label htmlFor="Name">Name</label>
                    <br />
                    <input type="text" id="Name" placeholder="Name" className="data-from-user" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="Lastname">Lastname</label>
                    <br />
                    <input type="text" id="Lastname" placeholder="Lastname" className="data-from-user" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="E-mail">E-mail</label>
                    <br />
                    <input type="text" id="E-mail" placeholder="admin@mail.ru" className="data-from-user" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="Password">Password</label>
                    <br />
                    <input type="password" id="Password" placeholder="*********" className="data-from-user" />
                  </div>
                </div>
              </div>
            </div>
            <div className="button-link">
              <button type='button' className="sign-in-button btnshadow" onClick={registerClickHandler}>
                Sign up
              </button>
              <Link to="/Signin" id="already-link">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
