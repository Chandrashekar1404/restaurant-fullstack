import { useEffect, useState } from "react";
import "./Wishlist.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  const customerId = localStorage.getItem("userId");

  useEffect(() => {

    if (!customerId) {
      setWishlist([]);
      return;
    }

    const storageKey = `wishlist_${customerId}`;

    const savedWishlist =
      localStorage.getItem(storageKey);

    if (savedWishlist) {

      try {

        setWishlist(
          JSON.parse(savedWishlist)
        );

      } catch (error) {

        console.error(
          "Wishlist loading error:",
          error
        );

        setWishlist([]);

      }

    } else {

      // New customer = empty wishlist
      setWishlist([]);

    }

  }, [customerId]);


  // ==============================
  // REMOVE FROM WISHLIST
  // ==============================

  const removeFromWishlist = (id) => {

    const updatedWishlist =
      wishlist.filter(
        item => item.id !== id
      );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      `wishlist_${customerId}`,
      JSON.stringify(updatedWishlist)
    );

  };


  // ==============================
  // ADD TO CART
  // ==============================

  const addToCart = (item) => {

    console.log(
      "Adding to cart:",
      item
    );

    alert(
      `${item.name} added to cart`
    );

  };


  return (

    <div className="wishlist-page">

      <h1>
        ❤️ My Wishlist
      </h1>


      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <h2>
            Your wishlist is empty ❤️
          </h2>

          <p>
            Add your favorite dishes here
            and they will appear in your wishlist.
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


              <h3>
                {item.name}
              </h3>


              <p>
                {item.price}
              </p>


              <button
                onClick={() =>
                  addToCart(item)
                }
              >
                Add to Cart
              </button>


              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Wishlist;