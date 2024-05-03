import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="links-container">
      <Link to="/">
        <li className="link-name">Home</li>
      </Link>
      <Link to="/products">
        <li className="link-name">Products</li>
      </Link>
      <Link to="/cart">
        <li className="link-name">Cart</li>
      </Link>
    </ul>
    <button type="button" className="logout-desktop-btn">
      Logout
    </button>
    <button type="button" className="logout-mobile-btn">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="logout icon"
        className="logout-icon"
      />
    </button>
  </div>
)

export default withRouter(Header)
