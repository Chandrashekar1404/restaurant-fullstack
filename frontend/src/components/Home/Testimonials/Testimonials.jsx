import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Food Blogger",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "The Hyderabadi Biryani was absolutely delicious! The flavors were authentic, and the service was excellent.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Regular Customer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "GRAND NexaDine has become my favorite restaurant. Fresh food, quick delivery, and a wonderful dining experience!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Business Executive",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4.8,
    review:
      "Loved the pizza and desserts. Beautiful ambience with friendly staff. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-title">
        <h2>⭐ Customer Testimonials</h2>

        <p>
          Here's what our happy customers say about us.
        </p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((customer) => (

          <div
            className="testimonial-card"
            key={customer.id}
          >

            <img
              src={customer.image}
              alt={customer.name}
            />

            <h3>{customer.name}</h3>

            <span>{customer.role}</span>

            <div className="stars">
              ⭐ {customer.rating}
            </div>

            <p>"{customer.review}"</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;