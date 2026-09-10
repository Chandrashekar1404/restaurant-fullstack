import "./Contact.css";
import restaurantInfo from "../../data/restaurantInfo";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="subtitle">
        We'd love to hear from you. Get in touch with NexaDine.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Our Office</h2>

          <p><strong>📍 Address:</strong> Hyderabad, Telangana, India</p>

          <p><strong>📞 Phone:</strong> +91 9391104651</p>

          <p><strong>✉ Email:</strong> support@nexadine.com</p>

          <p><strong>🕒 Working Hours:</strong><br/>
          Monday - Saturday<br/>
          9:00 AM - 9:00 PM</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;