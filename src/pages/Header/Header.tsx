import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/Navbar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import bag from './Bag.svg';
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
          <Link to="/log-in" className="sign">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
