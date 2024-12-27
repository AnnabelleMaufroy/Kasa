import Banner from "../components/banner";
import Cards from "../components/Cards";
import bannerAccueil from '../assets/banner_accueil.png';

function Home(){
    return(
        <section>
            <Banner
            image ={bannerAccueil}
            text="Chez vous, partout et ailleurs" />
            <Cards />
        </section>
    );
    
}

export default Home;