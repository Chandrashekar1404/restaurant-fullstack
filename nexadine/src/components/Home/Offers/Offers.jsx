import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "20% OFF",
    subtitle: "On All Pizzas",
    description: "Use Code: PIZZA20",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    color: "#ff5722",
  },
  {
    id: 2,
    title: "BUY 1 GET 1",
    subtitle: "Burgers",
    description: "Every Friday",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    color: "#4CAF50",
  },
  {
    id: 3,
    title: "FREE DESSERT",
    subtitle: "Orders Above ₹999",
    description: "Limited Time Offer",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    color: "#E91E63",
  },
];

function Offers() {
  return (
    <section className="offers">

      <div className="offer-title">
        <h2>🎉 Today's Special Offers</h2>
        <p>Grab these exciting deals before they're gone!</p>
      </div>

      <div className="offer-grid">

        {offers.map((offer) => (

          <div
            className="offer-card"
            key={offer.id}
            style={{ borderTop: `6px solid ${offer.color}` }}
          >

            <div className="offer-image">
              <img src={offer.image} alt={offer.title} />
            </div>

            <div className="offer-content">

              <h1 style={{ color: offer.color }}>
                {offer.title}
              </h1>

              <h3>{offer.subtitle}</h3>

              <p>{offer.description}</p>

              <button>
                Claim Offer
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Offers;