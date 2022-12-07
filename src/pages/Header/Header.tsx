import { NavBar } from '../../Components/NavBar/Navbar';
import '../Header/Header.scss';
import logo from './Logo.png';
import bag from './Bag.png';

export const Header = () => {
  return (
    <header className="narrow-container">
      <img className="logo" src={logo} alt="logo" />
      <NavBar />

      <div className="bagsign">
        <img className="bag" src={bag} alt="bag" />
        <button className="sign">Sign in</button>
      </div>
    </header>
  );
};
