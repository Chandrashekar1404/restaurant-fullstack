import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="settings-page">

      <h1>⚙ Account Settings</h1>

      <div className="settings-card">

        <div className="setting-item">
          <label>🌙 Dark Mode</label>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <label>🔔 Notifications</label>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-item">
          <label>📧 Email Newsletter</label>

          <input
            type="checkbox"
            checked={newsletter}
            onChange={() => setNewsletter(!newsletter)}
          />
        </div>

        <button onClick={handleSave}>
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;