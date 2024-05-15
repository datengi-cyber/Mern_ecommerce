import Pricing from "../ui/Pricing";
import { Link } from "react-router-dom";

export default function Cart({ cart, changeQuantity, removeItem }) {
  function updatePrice() {
    let price = 0;
    let tax = 0;
    cart.forEach((item) => {
      price += (+item.price) * item.quantity;
    });
    tax = price * 0.1;
    return { price, tax };
  }
  const { price, tax } = updatePrice();

  return (
    <>
      <div className="cart-section section-spacing">
        <div className="max-width">
          {cart.length <= 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-img-container">
                <img src="/images/totoro.png" alt="Empty cart"></img>
              </div>
              <div className="cart-empty-message">
                <h1>Opps! Looks like your cart is empty.</h1>
                <Link to="/products">
                  <button className="btn">
                    <p>Keep Shopping</p>
                  </button>
                </Link>
              </div>
            </div>
          ) : (
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
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="cart-info">
                            <div className="cart-image-container">
                              {/* Update src from item.image to item.src */}
                              <img
                                src={item.src} // Fix: Changed from item.image to item.src
                                className="cart-img"
                                alt={item.title}
                              ></img>
                            </div>
                            <div className="cart-image-description">
                              <p className="title">{item.title}</p>
                              <div className="price">
                                Price:
                                <span>
                                  <Pricing price={item.price} />
                                </span>
                              </div>
                              <button
                                className="btn btn-remove"
                                onClick={() => removeItem(item)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={(e) =>
                              changeQuantity(item, e.target.value)
                            }
                            className="quantity"
                          ></input>
                        </td>
                        <td>${item.price * item.quantity}</td>
                      </tr>
                    ))}
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
                  <span>${(price + tax).toFixed(2)}</span>
                </p>

                <button
                  className="btn btn-checkout"
                  onClick={() =>
                    alert("This function is not available for now :(")
                  }
                >
                  Proceed To Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
