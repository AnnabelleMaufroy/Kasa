import { Link } from 'react-router-dom'
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className='NFContainer'>
        <h2 className='NFtitle'>404</h2>
        <p className='NFtxt'>Oups! La page que vous demandez n’existe pas.</p>
        <Link to="/" className='linkHome'>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default NotFound