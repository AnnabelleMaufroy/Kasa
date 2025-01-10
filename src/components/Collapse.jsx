import PropTypes from 'prop-types';
import '../styles/Collapse.scss'
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

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
            <IoIosArrowUp onClick={rotateArrow}  className={arrowClass()}  />
        </div>
        <div className={contentClass()}>
          <div className='content'>
            {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>) : (<p>{content}</p>)}
          </div>
        </div>
        
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse