import { TiStarFullOutline } from "react-icons/ti";
import PropTypes from 'prop-types';
import "../styles/Ratings.scss";

function Ratings({rating}){
    const totalStars = 5;
    const redStars = parseInt(rating, 10);
    const greyStars= totalStars - redStars;

  return (
    <div className='starsContainer'>
        <div className='stars'>
            {Array(redStars)
            .fill(0)
            .map((_,index)=>(
                <TiStarFullOutline key={`filled-${index}`} className="starRed" />
            ))}
            {Array(greyStars)
            .fill(0)
            .map((_, index)=>(
                <TiStarFullOutline key={`empty-${index}`} className="starGrey" />
            ))}
        </div>
    </div>
  )
}
Ratings.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Ratings