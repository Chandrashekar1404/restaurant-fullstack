import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (!feedback.trim()) {
      alert("Please enter your feedback.");
      return;
    }

    console.log({
      name,
      email,
      rating,
      feedback,
    });

    alert("Thank you for your valuable feedback! ❤️");

    setName("");
    setEmail("");
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="feedback-page">

      {/* HERO */}
      <div className="feedback-hero">
        <div>
          <p className="feedback-small-title">
            NEXADINE EXPERIENCE
          </p>

          <h1>
            We'd Love to Hear
            <span> From You</span>
          </h1>

          <p>
            Your feedback helps us improve our food,
            service and overall dining experience.
          </p>
        </div>
      </div>

      {/* FEEDBACK CARD */}
      <div className="feedback-container">

        <div className="feedback-card">

          <div className="feedback-heading">
            <h2>Share Your Experience</h2>

            <p>
              Tell us how your NexaDine experience was.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="feedback-input-group">
              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="feedback-input-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* RATING */}
            <div className="rating-section">

              <label>
                How would you rate us?
              </label>

              <div className="stars">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={
                      star <= rating
                        ? "star active"
                        : "star"
                    }
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}

              </div>

              <p className="rating-text">
                {rating === 0 && "Select a rating"}
                {rating === 1 && "Very Poor"}
                {rating === 2 && "Poor"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent!"}
              </p>

            </div>

            {/* MESSAGE */}
            <div className="feedback-input-group">

              <label>Your Feedback</label>

              <textarea
                rows="6"
                placeholder="Tell us about your experience..."
                value={feedback}
                onChange={(e) =>
                  setFeedback(e.target.value)
                }
              />

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="feedback-submit"
            >
              Submit Feedback
            </button>

          </form>

        </div>

        {/* SIDE INFORMATION */}
        <div className="feedback-side">

          <div className="feedback-icon">
            💬
          </div>

          <h3>Your Voice Matters</h3>

          <p>
            Every review helps NexaDine provide
            better food and better service.
          </p>

          <div className="feedback-benefits">

            <div>
              <span>🍽️</span>
              <p>Better Food</p>
            </div>

            <div>
              <span>⭐</span>
              <p>Better Service</p>
            </div>

            <div>
              <span>❤️</span>
              <p>Happy Customers</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Feedback;