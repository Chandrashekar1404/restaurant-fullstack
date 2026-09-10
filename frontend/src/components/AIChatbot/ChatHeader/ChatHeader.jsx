import "./ChatHeader.css";
import ai from "../../../assets/ai.png";

function ChatHeader({ onClose }) {
  return (
    <div className="chat-header">

      <div className="header-left">

        <img
          src={ai}
          alt="NexaDine AI"
          className="header-avatar"
        />

        <div>

          <h3>NexaDine AI</h3>

          <p className="online">
            <span className="online-dot"></span>
            Online
          </p>

        </div>

      </div>

      <button
        className="close-chat"
        onClick={onClose}
      >
        ✖
      </button>

    </div>
  );
}

export default ChatHeader;