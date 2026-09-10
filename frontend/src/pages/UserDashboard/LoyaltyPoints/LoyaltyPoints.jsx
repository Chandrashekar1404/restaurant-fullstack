import { useEffect, useState } from "react";
import "./LoyaltyPoints.css";

function LoyaltyPoints() {

  const [points, setPoints] = useState(0);

  const customerId = localStorage.getItem("userId");

  useEffect(() => {

    if (!customerId) {
      setPoints(0);
      return;
    }

    const storageKey =
      `loyaltyPoints_${customerId}`;

    const savedPoints =
      localStorage.getItem(storageKey);

    if (savedPoints) {
      setPoints(Number(savedPoints));
    } else {
      // New customer starts with 0 points
      setPoints(0);
    }

  }, [customerId]);


  return (

    <div className="loyalty-page">

      <h1>
        ⭐ Loyalty Points
      </h1>

      <div className="loyalty-card">

        <div className="points-icon">
          ⭐
        </div>

        <div>

          <h2>
            {points}
          </h2>

          <p>
            Available Loyalty Points
          </p>

        </div>

      </div>


      {points === 0 && (

        <div className="empty-loyalty">

          <h3>
            Start earning points! 🎉
          </h3>

          <p>
            Place orders through NexaDine
            to start earning loyalty points.
          </p>

        </div>

      )}


      {points > 0 && (

        <div className="loyalty-info">

          <h3>
            Keep earning! 🎉
          </h3>

          <p>
            Your loyalty points can be used
            for future rewards.
          </p>

        </div>

      )}

    </div>

  );

}

export default LoyaltyPoints;