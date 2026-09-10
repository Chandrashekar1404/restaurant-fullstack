import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

import restaurantAd from "../../../assets/videos/restaurant-ad.mp4";
import partnerBg from "../../../assets/images/partner-bg.png";

function Hero() {
  const navigate = useNavigate();

  // false = Partner/Hero image
  // true = Advertisement video
  const [showVideo, setShowVideo] = useState(false);

  const videoRef = useRef(null);

  /*
   * =========================================
   * PARTNER IMAGE
   *
   * Show partner image for 15 seconds
   * =========================================
   */

  useEffect(() => {
    if (showVideo) {
      return;
    }

    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, [showVideo]);

  /*
   * =========================================
   * START VIDEO
   * =========================================
   */

  useEffect(() => {
    if (!showVideo) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;

    video.play().catch((error) => {
      console.log("Video autoplay error:", error);
    });
  }, [showVideo]);

  /*
   * =========================================
   * VIDEO COMPLETED
   *
   * When advertisement completely finishes,
   * show partner image again.
   * =========================================
   */

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  /*
   * =========================================
   * ORDER NOW
   * =========================================
   */

  const handleOrderNow = () => {
    navigate("/menu");
  };

  /*
   * =========================================
   * BOOK TABLE
   * =========================================
   */

  const handleBookTable = () => {
    navigate("/reservation");
  };

  /*
   * =========================================
   * RESTAURANT REGISTER
   * =========================================
   */

  const handleRestaurantRegister = () => {
    navigate("/restaurant-register");
  };

  return (
    <section className="hero">

      {/* ==================================================
          PARTNER IMAGE + HERO CONTENT
      ================================================== */}

      {!showVideo && (
        <div
          className="partner-hero"
          style={{
            backgroundImage: `url(${partnerBg})`,
          }}
        >

          {/* Dark Overlay */}

          <div className="partner-hero-overlay"></div>


          {/* ==================================================
              HERO CONTENT
          ================================================== */}

          <div className="hero-content">

            <span className="hero-tag">
              🍽 Welcome to GRAND NexaDine
            </span>


            <h1>
              Experience Fine Dining
              <br />
              Like Never Before
            </h1>


            <p>
              Fresh ingredients • Delicious recipes • Fast delivery
              <br />
              Enjoy premium food crafted by our expert chefs.
            </p>


            {/* HERO BUTTONS */}

            <div className="hero-buttons">

              {/* ORDER NOW */}

              <button
                type="button"
                className="order-btn"
                onClick={handleOrderNow}
              >
                🍕 Order Now
              </button>


              {/* BOOK TABLE */}

              <button
                type="button"
                className="book-btn"
                onClick={handleBookTable}
              >
                📅 Book Table
              </button>

            </div>

          </div>


          {/* ==================================================
              RESTAURANT PARTNER
          ================================================== */}

          <div className="restaurant-partner">

            <h2>
              Partner with GRAND NexaDine
            </h2>


            <p>
              Grow your restaurant business with us
            </p>


            {/* OFFER */}

            <div className="partner-offer">

              <div className="offer-icon">
                %
              </div>


              <div>

                <strong>
                  0% commission for 1st month!
                </strong>

                <span>
                  Only valid for new restaurant partners
                </span>

              </div>

            </div>


            {/* REGISTER RESTAURANT */}

            <button
              type="button"
              className="partner-btn"
              onClick={handleRestaurantRegister}
            >
              Register your restaurant
            </button>

          </div>

        </div>
      )}


      {/* ==================================================
          ADVERTISEMENT VIDEO
      ================================================== */}

      {showVideo && (

        <div className="advertisement-video">

          <video
            ref={videoRef}
            className="hero-video"
            src={restaurantAd}
            muted
            playsInline
            onEnded={handleVideoEnd}
          />

        </div>

      )}

    </section>
  );
}

export default Hero;