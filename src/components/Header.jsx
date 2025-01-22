import { NavLink } from 'react-router-dom';
import "../styles/header.scss";
import Logo from "../assets/logo.png";

function Header(){
    return(
            <header className="header_Container">
                <NavLink to='/'><img className="logo" src={Logo} alt="logo of the website Kasa" /></NavLink>
                <nav className="nav_Container">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/About">A propos</NavLink>
                </nav>
            </header>
        );
}
export default Header