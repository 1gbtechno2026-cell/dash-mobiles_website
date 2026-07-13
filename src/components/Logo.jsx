import { Link } from 'react-router-dom'
import dashmobilesLogo from '../assets/brands/dashmobiles-logo.png'
import './Logo.css'

function Logo({ size = 'md', onClick }) {
  return (
    <Link
      to="/"
      className={`logo logo--${size}`}
      onClick={onClick}
      aria-label="Dashmobiles Private Limited — home"
    >
      <img className="logo-mark" src={dashmobilesLogo} alt="Dashmobiles" />
    </Link>
  )
}

export default Logo
