import { useState } from "react";
import "./index.css";
import { NavLink, Link } from "react-router-dom";

export default function NavBar({ updateCartNumber }) {
  const [toggle, setToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <nav>
        <Link to="/" className="link">
          <h1>
            CLOT<span className="logo">HIFY</span>
          </h1>
        </Link>
        {/* width and height  */}
        <ul className={toggle ? "nav-ul-show" : " nav-ul-hide"}>
          <li className="nav-li">
            <NavLink to="/" className="link">
              Home
            </NavLink>{" "}
          </li>
          <li className="nav-li">
            <NavLink to="/products" className="link">
              Products
            </NavLink>{" "}
          </li>

          <li className="nav-li">
            <NavLink to="/MenProduct" className="link">
              Male
            </NavLink>{" "}
          </li>

          <li className="nav-li">
            <NavLink to="/female" className="link">
              Female
            </NavLink>{" "}
          </li>

          <li className="nav-li">
            <NavLink to="/kids" className="link">
              Kids
            </NavLink>{" "}
          </li>
          {/* <li className="nav-li">
            <div className="dropdown-container">
              <select
                className="dropdown"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Category</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </li> */}
        </ul>
        <div className="icons">
          <NavLink to="/cart" className="link">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <div className="circle">{updateCartNumber}</div>
          <i
            className="fa-solid fa-bars"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      </nav>
    </>
  );
}