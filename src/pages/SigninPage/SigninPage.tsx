import '../SigninPage/SigninPage.scss';
import { Link } from 'react-router-dom';
import image from '../SigninPage/saveit(2).jpg';
export const SigninPage = () => {
  return (
    <>
      <div className="signin">
        <img srcSet={image} id="Tomato-Salad" alt="Main-Tomato" />
        <div className="yellowBlock">
          <form action="">
            <div className="contentOfForm">
              <div className="inputPart centered">
                <h2>Sign up</h2>
                <div className="Inputs">
                  <div className="label-input">
                    <label htmlFor="Name">Name</label>
                    <br />
                    <input type="text" id="Name" placeholder="Name" className="dataFromUser" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="Lastname">Lastname</label>
                    <br />
                    <input type="text" id="Lastname" placeholder="Lastname" className="dataFromUser" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="E-mail">E-mail</label>
                    <br />
                    <input type="text" id="E-mail" placeholder="admin@mail.ru" className="dataFromUser" />
                  </div>
                  <div className="label-input">
                    <label htmlFor="Password">Password</label>
                    <br />
                    <input type="password" id="Password" placeholder="*********" className="dataFromUser" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Button-link">
              <button className="SigninButton btnshadow">Sign up</button>
              <Link to="/Signin" id="Already-link">
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
