import "./BestSeller.css";

const bestSellers = [
  {
    id: 1,
    name: "Hyderabadi Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
    price: 499,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    price: 399,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Grilled Chicken Steak",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    price: 599,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    price: 249,
    rating: 4.8,
  },
];

function BestSeller() {
  return (
    <section className="best-seller">

      <div className="section-heading">
        <h2>🔥 Best Sellers</h2>
        <p>Our customers' favorite dishes</p>
      </div>

      <div className="best-grid">
        {bestSellers.map((food) => (
          <div className="best-card" key={food.id}>

            <div className="best-image">
              <img src={food.image} alt={food.name} />
              <span className="badge">Best Seller</span>
            </div>

            <div className="best-content">
              <h3>{food.name}</h3>

              <div className="rating">
                ⭐ {food.rating}
              </div>

              <h4>₹{food.price}</h4>

              <button>🍽 Order Now</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default BestSeller;