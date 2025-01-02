import { useParams } from 'react-router-dom';
import LogementsJSON from '../assets/logements.json'
import "../styles/Logement.scss";
import Carousel from '../components/Carousel'

function Logement() {
    const {id} = useParams();
    const logement = LogementsJSON.find((logement) => logement.id === id);

  return (
    <div className='logementContainer'>
        <Carousel pictures={logement.pictures} />
        <div className='titleLogementContainer'>
            <h2 className='titleLogement'>{logement.title}</h2>
            <h3 className='location'>{logement.location}</h3>
            <div className='tags'>
                {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Logement