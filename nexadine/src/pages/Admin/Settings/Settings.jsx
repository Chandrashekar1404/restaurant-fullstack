import "./Settings.css";

function Settings() {
  return (
    <div className="settings">

      <h1>⚙ Restaurant Settings</h1>

      <div className="settings-container">

        <form className="settings-form">

          <div className="form-group">
            <label>Restaurant Name</label>
            <input
              type="text"
              placeholder="GRAND NexaDine HOTEL & RESTAURANT"
            />
          </div>

          <div className="form-group">
            <label>Restaurant Logo</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>Owner Name</label>
            <input
              type="text"
              placeholder="Enter Owner Name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="restaurant@email.com"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="form-group">
            <label>Restaurant Address</label>
            <textarea
              rows="4"
              placeholder="Enter Restaurant Address"
            ></textarea>
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Opening Time</label>
              <input type="time" />
            </div>

            <div className="form-group">
              <label>Closing Time</label>
              <input type="time" />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>GST (%)</label>
              <input
                type="number"
                placeholder="18"
              />
            </div>

            <div className="form-group">
              <label>Delivery Charge</label>
              <input
                type="number"
                placeholder="50"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Facebook Link</label>
            <input
              type="text"
              placeholder="https://facebook.com/"
            />
          </div>

          <div className="form-group">
            <label>Instagram Link</label>
            <input
              type="text"
              placeholder="https://instagram.com/"
            />
          </div>

          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <button className="save-btn">
            💾 Save Settings
          </button>

        </form>

      </div>

    </div>
  );
}

export default Settings;