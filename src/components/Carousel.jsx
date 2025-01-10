import PropTypes from "prop-types";
import "../styles/Carousel.scss";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
      <IoIosArrowBack className="arrowPrev"onClick={prev}/>
      <img  className="carousel_image" src={pictures[currentIndex]} alt="Logement" />
      <p className="numCarousel">{currentIndex+1}/{pictures.length}</p>
      <IoIosArrowForward onClick={next} className="arrowNext"/>
    </div>
  )
}
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel