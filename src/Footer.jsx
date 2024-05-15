import { Link } from "react-router-dom";

export default function NavBar({ updateCartNumber }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">CLOT<span className="logo">HIFY</span></Link>
        <div className="nav-items">
          <ul className="nav-menu">
            <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-links">Products</Link></li>
            <li className="nav-item"><Link to="/MenProduct" className="nav-links">Male</Link></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/cart" className="nav-icon">
              <i className="fas fa-shopping-cart"></i>
              {updateCartNumber > 0 && <span className="cart-badge">{updateCartNumber}</span>}
            </Link>
            <Link to="/login" className="btn btn-login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
