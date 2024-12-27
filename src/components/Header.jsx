import { NavLink } from 'react-router-dom';
import "../styles/header.scss";
import Logo from "../assets/logo.png";

function Header(){
    return(
            <header className="header_Container">
                <img className="logo" src={Logo} alt="logo of the website Kasa" />
                <nav className="nav_Container">
                    <NavLink to="/">ACCUEIL</NavLink>
                    <NavLink to="/About">A PROPOS</NavLink>
                </nav>
            </header>
        );
}
export default Header