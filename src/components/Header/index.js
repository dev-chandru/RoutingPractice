// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <p className="logo-name">Wave</p>
    </div>
    <ul className="menu-container">
      <li>
        <Link className="menu-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="menu-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
