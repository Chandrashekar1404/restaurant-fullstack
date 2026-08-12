import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    total,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const gst = total * 0.05;
  const delivery = total > 0 ? 40 : 0;
  const grandTotal = total + gst + delivery;

  return (
    <div className="cart-container">
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h2>{item.name}</h2>

                <p>₹{item.price}</p>

                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  −
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

                <br />
                <br />

                <button
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h3>Subtotal : ₹{total.toFixed(2)}</h3>

          <h3>GST (5%) : ₹{gst.toFixed(2)}</h3>

          <h3>Delivery : ₹{delivery.toFixed(2)}</h3>

          <h2>Total : ₹{grandTotal.toFixed(2)}</h2>

          <Link
            to="/checkout"
            style={{ textDecoration: "none" }}
          >
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;