import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./FloatingCart.css";

function FloatingCart() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (totalItems === 0) return null;

  return (
    <Link to="/cart" className="floating-cart">

      <FaShoppingCart className="cart-icon" />

      <span className="cart-count">
        {totalItems}
      </span>

    </Link>
  );
}

export default FloatingCart;