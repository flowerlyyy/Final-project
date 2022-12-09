import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { NavBar } from '../../Components/NavBar/Navbar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import bag from './Bag.png';
import logo from './Logo.png';

export const Header = () => {
  const headerState = useSelector((state: RootState) => state.header);
  console.debug(headerState);
  return (
    <header className="narrow-container">
      <img className="logo" src={logo} alt="logo" />
      <NavBar />

      <div className="bagsign">
        <img className="bag" src={bag} alt="bag" />
        {headerState.currentUser ? (
          <div>
            {headerState.currentUser.name} {headerState.currentUser.lastName}
          </div>
        ) : (
          <Link to="/sign-in" className="sign">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};
