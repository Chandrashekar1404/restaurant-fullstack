import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🍽️",
    title: "Fresh Ingredients",
    description:
      "We prepare every dish using fresh vegetables, premium meat, and high-quality ingredients.",
  },
  {
    id: 2,
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description:
      "Our experienced chefs create delicious meals with authentic recipes and premium flavors.",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Fast Delivery",
    description:
      "Hot and fresh food delivered to your doorstep quickly with secure packaging.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "Premium Quality",
    description:
      "Every meal is carefully prepared to maintain the highest quality and taste standards.",
  },
  {
    id: 5,
    icon: "💳",
    title: "Secure Payment",
    description:
      "Pay safely using cards, UPI, wallets, or cash on delivery with complete security.",
  },
  {
    id: 6,
    icon: "📞",
    title: "24/7 Support",
    description:
      "Our customer support team is always available to help with your orders and questions.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-title">
        <h2>💚 Why Choose GRAND NexaDine?</h2>

        <p>
          We don't just serve food — we create unforgettable dining experiences.
        </p>
      </div>

      <div className="why-grid">

        {features.map((feature) => (

          <div className="why-card" key={feature.id}>

            <div className="why-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;