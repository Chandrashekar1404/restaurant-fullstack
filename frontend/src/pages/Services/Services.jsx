import "./Services.css";

function Services() {
  const services = [
    {
      title: "Dine-In",
      description: "Enjoy a premium dining experience in our restaurant.",
      icon: "🍽️",
    },
    {
      title: "Online Ordering",
      description: "Order your favorite meals online with ease.",
      icon: "📱",
    },
    {
      title: "Home Delivery",
      description: "Fast and reliable food delivery to your doorstep.",
      icon: "🚚",
    },
    {
      title: "Table Reservation",
      description: "Reserve your table in advance for a hassle-free visit.",
      icon: "🪑",
    },
    {
      title: "Event Catering",
      description: "Professional catering services for parties and events.",
      icon: "🎉",
    },
    {
      title: "Secure Payment",
      description: "Pay safely using cash, cards, or digital wallets.",
      icon: "💳",
    },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Discover the services offered by NexaDine.</p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;