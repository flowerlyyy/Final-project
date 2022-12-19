import './Navbar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
return (
    <nav className="desktop-only">
      <Link to="/diets" className="nav-link">
      Diets
      </Link>
      <Link to="/menu" className="nav-link">
      Menu
      </Link>
      <Link to="/delivery" className="nav-link">
      Delivery
      </Link>
      <Link to="/about-us" className="nav-link">
        About us
      </Link>
      <Link to="/blog" className="nav-link">
      Blog
      </Link>
      <Link to="/faq" className="nav-link">
      FAQ
      </Link>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
    </nav>
  );
};
