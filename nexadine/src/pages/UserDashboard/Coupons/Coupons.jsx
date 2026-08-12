import "./Coupons.css";

function Coupons() {
  return (
    <div className="page">

      <h1>🎁 My Coupons</h1>

      <div className="coupon">
        <h2>WELCOME20</h2>
        <p>20% OFF on your next order.</p>
      </div>

      <div className="coupon">
        <h2>FREEDELIVERY</h2>
        <p>Free delivery on orders above ₹500.</p>
      </div>

    </div>
  );
}

export default Coupons;