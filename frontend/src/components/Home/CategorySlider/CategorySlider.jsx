import "./CategorySlider.css";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 2,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 3,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
  },
  {
    id: 4,
    name: "Biryani",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
  },
  {
    id: 5,
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
  },
  {
    id: 6,
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
  },
  {
    id: 7,
    name: "Salads",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
  {
    id: 8,
    name: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
  },
];

function CategorySlider() {
  return (
    <section className="category-section">

      <div className="section-title">

        <h2>🍽 Browse Categories</h2>

        <p>
          Discover your favorite dishes
        </p>

      </div>

      <div className="category-slider">

        {categories.map((category) => (

          <div
            className="category-card"
            key={category.id}
          >
            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategorySlider;