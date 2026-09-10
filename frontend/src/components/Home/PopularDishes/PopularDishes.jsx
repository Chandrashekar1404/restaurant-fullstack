import "./PopularDishes.css";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
    price: 399,
    rating: 4.8,
    type: "Veg",
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    price: 299,
    rating: 4.9,
    type: "Non-Veg",
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
    price: 349,
    rating: 4.7,
    type: "Veg",
  },
  {
    id: 4,
    name: "Grilled Chicken",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700",
    price: 549,
    rating: 4.9,
    type: "Non-Veg",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
    price: 249,
    rating: 4.8,
    type: "Veg",
  },
  {
    id: 6,
    name: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700",
    price: 149,
    rating: 4.6,
    type: "Veg",
  },
];

function PopularDishes() {
  return (
    <section className="popular">

      <div className="popular-title">
        <h2>🍽 Popular Dishes</h2>
        <p>Our customers' most loved meals</p>
      </div>

      <div className="popular-grid">

        {dishes.map((dish) => (

          <div className="popular-card" key={dish.id}>

            <div className="popular-image">

              <img src={dish.image} alt={dish.name} />

              <span className="rating">
                ⭐ {dish.rating}
              </span>

              <span
                className={
                  dish.type === "Veg"
                    ? "veg"
                    : "nonveg"
                }
              >
                {dish.type}
              </span>

            </div>

            <div className="popular-content">

              <h3>{dish.name}</h3>

              <h2>₹{dish.price}</h2>

              <div className="buttons">

                <button className="view-btn">
                  👁 View
                </button>

                <button className="cart-btn">
                  🛒 Add
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PopularDishes;