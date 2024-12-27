import "../styles/footer.scss";
import LogoWhite from '../assets/logo_white.png'

function Footer(){
    return(
        <footer className="footer_container">
            <img className="logo_white" src={LogoWhite} alt="logo of the website in white" />
            <p className="footer_info">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer