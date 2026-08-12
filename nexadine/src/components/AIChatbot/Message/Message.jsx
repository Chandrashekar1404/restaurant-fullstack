import "./Message.css";
import ai from "../../../assets/ai.png";

function Message({ sender, text }) {
  return (
    <div className={`message-row ${sender}`}>

      {sender === "bot" && (
        <img
          src={ai}
          alt="AI"
          className="message-avatar"
        />
      )}

      <div className={`message-bubble ${sender}`}>
        {text}
      </div>

    </div>
  );
}

export default Message;