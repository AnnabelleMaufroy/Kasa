import { Link } from 'react-router-dom'
import "../styles/header.scss";

function Header(){
    return(
            <header className="header_Container">
                <img className="logo" src="/logo.png" alt="logo of the website Kasa" />
                <nav className="nav_Container">
                    <Link to="/">ACCUEIL</Link>
                    <Link to="/About">A PROPOS</Link>
                </nav>
            </header>
        );
}
export default Header