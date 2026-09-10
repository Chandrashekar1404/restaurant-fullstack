import "./AppDownload.css";

function AppDownload() {
  return (
    <section className="app-download">

      <div className="app-container">

        <div className="app-left">

          <span className="app-tag">
            📱 Mobile App
          </span>

          <h2>
            Download the
            <br />
            GRAND NexaDine App
          </h2>

          <p>
            Order delicious food anytime, anywhere.
            Get exclusive offers, faster checkout,
            live order tracking, and AI-powered food
            recommendations.
          </p>

          <div className="app-features">

            <div>✅ Fast Delivery</div>

            <div>✅ AI Food Assistant</div>

            <div>✅ Live Order Tracking</div>

            <div>✅ Secure Payments</div>

          </div>

          <div className="store-buttons">

            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </a>

            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>

          </div>

        </div>

        <div className="app-right">

          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700"
            alt="Mobile App"
          />

        </div>

      </div>

    </section>
  );
}

export default AppDownload;