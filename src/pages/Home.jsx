import Banner from "../components/banner";
import Cards from "../components/Cards";

function Home(){
    return(
        <section>
            <Banner
            image ="/banner_accueil.png"
            text="Chez vous, partout et ailleurs" />
            <Cards />
        </section>
    );
    
}

export default Home;