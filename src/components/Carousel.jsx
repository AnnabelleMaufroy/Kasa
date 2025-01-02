import PropTypes from "prop-types";
import "../styles/Carousel.scss";
import { useState } from "react";
import arrowCarousel from '../assets/arrow_carousel.png';

function Carousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function next(){
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex + 1);
        }
    }
    function prev(){
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        }else{
            setCurrentIndex(currentIndex -1);
        }
    }

    if (pictures.length === 1) {
        return (
          <div className="carousel">
            <img src={pictures[0]} alt="Logement" className="carousel_image" />
          </div>
        );
      }

  return (

    <div className="carousel">
        <img  className="arrowPrev" src={arrowCarousel} alt="flèche précédente du carousel" onClick={prev} />
        <img  className="carousel_image" src={pictures[currentIndex]} alt="Logement" />
        <img className="arrowNext" src={arrowCarousel} alt="flèche suivant du carousel" onClick={next} />
    </div>
  )
}
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel