import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-container">

        <span className="newsletter-tag">
          📩 Stay Updated
        </span>

        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Get exclusive offers, new menu updates,
          chef specials, and exciting discounts delivered
          straight to your inbox.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

        <small>
          We respect your privacy. No spam, only delicious updates.
        </small>

      </div>

    </section>
  );
}

export default Newsletter;