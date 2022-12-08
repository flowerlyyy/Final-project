import "../Header/Header.scss";
import logo from './Logo.png';
import bag from './Bag.png';
import { NavBar } from "../../Components/NavBar/Navbar";


export const Header = () => {
    return(
        <header className="narrow-container">
        <img  className="logo" src={logo}/>
        <NavBar/>
        
        <div className="bagsign">
        <img className="bag" src={bag}/>
        <button className="sign">Sign in</button>
    </div>
    </header>
    )
};