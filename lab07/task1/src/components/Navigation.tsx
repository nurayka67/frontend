import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/settings" className="nav-link">Settings</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </nav>
  )
}

export default Navigation