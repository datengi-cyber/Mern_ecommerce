import Pricing from "../ui/Pricing";
import { Link } from "react-router-dom";
export default function Cart({ cart, changeQuantity, removeItem }) {

    function updatePrice() {
        let price = 0
        let tax = 0
        cart.map((items) => {
            price += (+items.salePrice || +items.originalPrice) * items.quantity
        })
        tax = price * 0.1
        return { price, tax };
    }
    const { price, tax } = updatePrice();
   

    return (
        <>

            <div className="cart-section section-spacing">
                <div className="max-width">
            
                    {cart.length <= 0
                        ?
                        <>
                            <div className="empty-cart">
                                <div className="emtpy-cart-img-container">
                                    <img src="/images/totoro.png"></img>
                                </div>
                                <div className="cart-empty-message">
                                <h1>Opps! Look like your cart is empty :</h1>
                                <Link to="/products"> <button className="btn"><p>Keep Shopping</p></button></Link>
                                </div>
                               
                            </div>
                        </>
                        :
                        <>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>SubPrice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((items) => {
                                            return (

                                                <tr key={items.id}>
                                                    <td>
                                                        <div className="cart-info">
                                                            <div className="cart-image-container">
                                                                <img src={items.src} className="cart-img"></img>
                                                            </div>
                                                            <div className="cart-image-description">
                                                                <p className="title">{items.title}</p>
                                                                <div className="price">
                                                                    Price:
                                                                    <span>
                                                                        <Pricing
                                                                            originalPrice={items.originalPrice}
                                                                            salePrice={items.salePrice}
                                                                        />
                                                                    </span>
                                                                </div>
                                                                <button className="btn btn-remove" onClick={() => removeItem(items)}>Remove</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input type="number"
                                                            min="0"
                                                            value={items.quantity}
                                                            onChange={(e) => changeQuantity(items, e.target.value)}
                                                            className="quantity"></input>
                                                    </td>
                                                    <td>${(items.salePrice || items.originalPrice) * items.quantity}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="checkout right">
                                <p className="total-item sub-total">
                                    <span>SubTotal:</span>
                                    <span>${price.toFixed(2)}</span>
                                </p>

                                <p className="total-item tax">
                                    <span>Tax:</span>
                                    <span> ${tax.toFixed(2)}</span>
                                </p>

                                <p className="total-item total">
                                    <span>Total:</span>
                                    <span>${parseInt(parseFloat(price) + parseFloat(tax.toFixed(2)))}</span>

                                </p>

                                <button className="btn btn-checkout" onClick={() => alert("This function is not available for now :(")}>Procced To Checkout</button>
                            </div>
                        </>}

                </div>
            </div>
        </>
    );
}
