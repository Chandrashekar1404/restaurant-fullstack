import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">

      <div className="signup-box">

        <h1>Create Account</h1>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="tel" placeholder="Mobile Number" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Confirm Password" />

        <button>Create Account</button>

        <p>
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>

    </div>
  );
}

export default Signup;