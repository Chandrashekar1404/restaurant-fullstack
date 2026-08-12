import "./About.css";
import aboutBg from "../../assets/images/about-bg.png";

function About() {
  return (
    <div className="about">

      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-image">
          <img src={aboutBg} alt="GRAND NexaDine Hotel" />
        </div>

        {/* Right Side Content */}
        <div className="about-text">

          <h1>GRAND NexaDine HOTEL & RESTAURANT</h1>

          <h3>Luxury Dining | Premium Hospitality | Memorable Experiences</h3>

          <p>
            Welcome to <strong>GRAND NexaDine HOTEL & RESTAURANT</strong>,
            one of the city's finest dining destinations, where elegance,
            comfort, and exceptional hospitality come together. Our restaurant
            is designed to provide a warm and luxurious atmosphere for families,
            friends, business professionals, and travelers seeking an
            unforgettable dining experience.
          </p>

          <p>
            We proudly serve a wide variety of cuisines including Indian,
            Chinese, Continental, Italian, South Indian, and delicious desserts.
            Every dish is prepared by experienced chefs using fresh,
            high-quality ingredients to ensure outstanding taste and quality.
          </p>

          <p>
            GRAND NexaDine offers stylish interiors, comfortable seating,
            modern facilities, private dining spaces, banquet halls for special
            events, birthday celebrations, weddings, corporate meetings, and
            family gatherings. Our friendly staff is committed to delivering
            exceptional customer service and making every visit memorable.
          </p>

          <p>
            Whether you're enjoying a romantic dinner, celebrating a special
            occasion, or simply relaxing with friends, GRAND NexaDine promises
            delicious food, excellent service, and an elegant dining
            experience that exceeds your expectations.
          </p>

          <button className="about-btn">
            Reserve Your Table
          </button>

        </div>

      </div>

    </div>
  );
}

export default About;