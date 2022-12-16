import '../SignupPage/SignupPage.scss';
import { Link } from 'react-router-dom';
import tomato from './tomato.jpg';

export const SignupPage = () => {
  return (
    <>
      <div className="sign-up">
        <img srcSet={tomato} id="tomato-salad" alt="main-tomato" />
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
              <button type="button" className="sign-in-button btnshadow">
                Sign up
              </button>
              <Link to="/log-in" id="already-link" className="centered">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
