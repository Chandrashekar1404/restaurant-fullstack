import "./MenuCard.css";

function MenuCard({
  item,
  addToCart,
  setSelectedFood,
}) {
  return (
    <div className="menu-card">

      <div className="menu-image">
        <img src={item.image} alt={item.name} />

        <span className="rating">
          ⭐ {item.rating}
        </span>
      </div>

      <div className="menu-content">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="badges">

          <span
            className={item.type === "Veg" ? "veg" : "nonveg"}
          >
            {item.type === "Veg"
              ? "🌱 Veg"
              : "🍗 Non-Veg"}
          </span>

          {item.spicy && (
            <span className="spicy">
              🌶️ Spicy
            </span>
          )}

        </div>

        <h2>₹{item.price}</h2>

        <div className="card-buttons">

          <button
            className="details-btn"
            onClick={() => setSelectedFood(item)}
          >
            View
          </button>

          <button
            className="cart-btn"
            onClick={() => addToCart(item)}
          >
            🛒 Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default MenuCard;