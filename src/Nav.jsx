
import { useState } from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

export default function Nav({ updateCartNumber }) {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav>
                <h1>Anime<span className="logo">Shoppy</span></h1>
                <ul className={toggle?"nav-ul-show":" nav-ul-hide"}>
                    <li className="nav-li"><NavLink to="/" className="link"> Home</NavLink> </li>
                    <li className="nav-li"><NavLink to="/products" className="link">  Products</NavLink> </li>
                </ul>
                <div className="icons">
                    <NavLink to="/cart" className="link"> <i className="fa-solid fa-cart-shopping"></i></NavLink>
                    <div className="circle">{updateCartNumber}</div>
                    <i className="fa-solid fa-bars" onClick={()=>setToggle(!toggle)}></i>
                </div>
            </nav>
        </>
    );
}



