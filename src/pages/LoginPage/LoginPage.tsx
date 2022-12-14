import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';
import { baseUrl } from '../../constants';
import { logIn } from '../../store/currentUserSlice';
import { setValueInLocalStorage } from '../../services/localStorage.service';
import { useDispatch } from 'react-redux';
import tomato from './tomato.jpg';
export const LoginPage = () => {
  const registerClickHandler = () => {
    fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        firstName: 'Javid',
        password: '11111111',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValueInLocalStorage('authToken', data.access_token);
        const user: User = {
          id: data.id,
          name: data.name,
          lastName: data.lastName,
        };
        dispatch(logIn({ user: user }));
      });
  };
  const dispatch = useDispatch();
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
