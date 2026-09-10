import { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in customer ID
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    // No logged-in customer
    if (!userId) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    // For now, start with an empty wishlist for each customer.
    // Later we will connect this to the Spring Boot wishlist API.
    setWishlist([]);

    setLoading(false);

  }, [userId]);

  if (loading) {
    return <h2>Loading wishlist...</h2>;
  }

  return (
    <div>

      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <h2>Your wishlist is empty ❤️</h2>

          <p>
            You haven't added any food items to your wishlist yet.
          </p>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((item) => (

            <div
              className="wishlist-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button>
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;