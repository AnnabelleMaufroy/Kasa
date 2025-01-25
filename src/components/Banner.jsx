import '../styles/Banner.scss'
import PropTypes from 'prop-types';

const banner = ({image ,text}) => {
  return (
    <div className="banner">
        <img
        src={image}
        alt="Bannière"
        className="banner_image"
        />
        <div className="banner_filter"></div>
        {text && <h1 className="banner_text">{text}</h1>}
    </div>
  )
}
banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default banner