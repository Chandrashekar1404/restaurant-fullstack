import "./CartItem.css";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      <div className="cart-details">

        <h3>{item.name}</h3>

        <p className="price">
          ₹{item.price}
        </p>

        <div className="quantity-controls">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

      </div>

      <div className="cart-actions">

        <h3>
          ₹{item.price * item.quantity}
        </h3>

        <button
          className="remove-btn"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;