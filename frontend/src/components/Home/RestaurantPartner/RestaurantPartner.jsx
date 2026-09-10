import { Link } from "react-router-dom";
import "./RestaurantPartner.css";

function RestaurantPartner() {
  return (
    <section className="restaurant-partner">

      <div className="partner-content">

        <h1>
          Partner with GRAND NexaDine
          <br />
          and grow your business
        </h1>

        <p className="partner-subtitle">
          Grow your restaurant business with us
        </p>

        <div className="partner-offer">

          <span className="offer-icon">
            %
          </span>

          <div>
            <strong>
              0% commission for 1st month!
            </strong>

            <p>
              Only valid for new restaurant partners
            </p>
          </div>

        </div>

        {/* REGISTER RESTAURANT */}

        <Link
          to="/restaurant-register"
          className="partner-register-btn"
        >
          Register your restaurant
        </Link>

      </div>

      <div className="partner-info">

        <div className="partner-details">

          <h2>
            Get started: It only takes 10 minutes
          </h2>

          <p>
            Please keep these documents and details ready
            for a smooth sign-up.
          </p>

          <div className="partner-list">

            <div>✓ PAN card</div>

            <div>
              ✓ GST number, if applicable
            </div>

            <div>✓ FSSAI license</div>

            <div>
              ✓ Menu and profile food image
            </div>

            <div>
              ✓ Bank account details
            </div>

            <div>
              ✓ Restaurant details
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RestaurantPartner;