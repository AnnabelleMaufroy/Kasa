import { useParams } from 'react-router-dom';
import LogementsJSON from '../assets/logements.json'
import "../styles/Logement.scss";
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import Ratings from '../components/Ratings'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Logement() {
    const {id} = useParams();
    const logement = LogementsJSON.find((logement) => logement.id === id);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!logement) {
            navigate('/404', { replace: true });
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

  return (
    <div className='logementContainer'>
        <Carousel pictures={logement.pictures} />
        <div className='infoContainer'>
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
            <div className='hostContainer'>
                <Ratings rating={logement.rating} />
                <div className='host'>
                    <span className='hostName'>{logement.host.name}</span>
                    <img className='hostPicture' src={logement.host.picture} alt="picture of the host" />
                </div>
            </div>
        </div>
        <div className='collapseContainer'>
            <Collapse
            title='Description'
            content={logement.description}
             />
             <Collapse
            title='Equipements'
            content={logement.equipments}
             />
        </div>
        
    </div>
  )
}

export default Logement