import PropTypes from 'prop-types';
import Arrow from '../assets/arrow.png'
import '../styles/Collapse.scss'
import { useState } from 'react';

function Collapse({title, content}) {

  const [isRotate, setIsRotate] = useState(false)

  function rotateArrow(){
    setIsRotate(isRotate === true ? false : true )
  }
  function arrowClass(){
    return isRotate ? 'arrow rotated' : 'arrow'
  }
  function contentClass(){
    return isRotate ? 'contentContainer appear' : 'contentContainer'
  }

  return (
    <div className='collapse'>
        <div className='titleContainer'>
            <h2>{title}</h2>
            <img
            onClick={rotateArrow}  
            className={arrowClass()}
            src={Arrow} 
            alt="flèche de l'élément collapse" />
        </div>
        <div className={contentClass()}>
          <div className='content'>{content}</div>
        </div>
        
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse