import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { register } from '../SignupPage/signupPageSlice';
import { useDispatch } from 'react-redux';
import tomato from './tomato.jpg';
export const LoginPage = () => {
  const dispatch = useDispatch();
  const registerClickHandler = () =>
    dispatch(register({ name: 'Javid', lastName: 'Hatamov', email: 'mail@example.com', password: '12345' }));
  return (
    <>
      <div className="login">
        <img srcSet={tomato} id="tomato-salad" alt="tomato" />
        <div className="content-block">
          <form action="">
            <div className="content-of-form">
              <div className="input-part centered">
                <h2>Log in</h2>
                <div className="inputs centered">
                  <div className="label-input">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" placeholder="Name" className="data-from-user" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" id="password" placeholder="*********" className="data-from-user" />
                  </div>
                </div>
                <button type="button" className="log-in-button btnshadow" onClick={registerClickHandler}>
                  Log in
                </button>
                <Link to="/sign-up" id="dont-have-link">
                  Don't have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
