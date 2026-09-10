import "./FoodModal.css";

function FoodModal({
  food,
  closeModal,
  addToCart,
}) {
  if (!food) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>

      <div
        className="food-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={closeModal}
        >
          ✖
        </button>

        <img
          src={food.image}
          alt={food.name}
        />

        <h2>{food.name}</h2>

        <p className="description">
          {food.description}
        </p>

        <div className="food-info">

          <span>
            ⭐ {food.rating}
          </span>

          <span>
            {food.type === "Veg"
              ? "🌱 Veg"
              : "🍗 Non-Veg"}
          </span>

          {food.spicy && (
            <span>🌶 Spicy</span>
          )}

        </div>

        <h3>Rs. {food.price}</h3>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(food)}
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default FoodModal;