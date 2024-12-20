import '../styles/Banner.scss'

const banner = ({image ,text}) => {
  return (
    <div className="banner">
        <img
        src={image}
        alt="Bannière"
        className="banner_image"
        />
        <div className="banner_filter"></div>
        <div className="banner_text">{text}</div>
    </div>
  )
}

export default banner