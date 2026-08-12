import "./ChefSpecial.css";

const chefSpecials = [
  {
    id: 1,
    name: "Royal Hyderabadi Biryani",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800",
    price: 549,
    rating: 4.9,
    description:
      "Authentic Hyderabadi dum biryani cooked with aromatic basmati rice and tender chicken.",
  },
  {
    id: 2,
    name: "Premium Seafood Platter",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    price: 799,
    rating: 4.8,
    description:
      "A delightful platter of grilled prawns, fish fillet and calamari served with signature sauces.",
  },
];

function ChefSpecial() {
  return (
    <section className="chef-special">

      <div className="chef-heading">
        <span>👨‍🍳 Chef's Recommendation</span>
        <h2>Chef Special</h2>
        <p>
          Handpicked premium dishes prepared by our expert chefs.
        </p>
      </div>

      <div className="chef-container">

        {chefSpecials.map((food) => (

          <div className="chef-card" key={food.id}>

            <div className="chef-image">
              <img src={food.image} alt={food.name} />

              <div className="chef-badge">
                ⭐ Chef Choice
              </div>
            </div>

            <div className="chef-info">

              <h3>{food.name}</h3>

              <div className="chef-rating">
                ⭐ {food.rating}
              </div>

              <p>{food.description}</p>

              <div className="chef-bottom">

                <h4>₹{food.price}</h4>

                <button>
                  🍽 Order Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ChefSpecial;