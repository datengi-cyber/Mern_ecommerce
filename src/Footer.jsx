import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <div className="footer-section">
            
                    <div className="space-evenly">
                   
                            <h1 className="footer-logo">Anime<span className="logo">Shoppy</span></h1>
                            <ul>
                                <li className="footer-li"><Link to="/" className="footer-link"> Home</Link> </li>
                                <li className="footer-li"><Link to="/products" className="footer-link">  Products</Link> </li>
                            </ul>
             
                    </div>
           
            </div>
        </>

    )
}