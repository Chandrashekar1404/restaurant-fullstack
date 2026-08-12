import "./TypingIndicator.css";
import ai from "../../../assets/ai.png";

function TypingIndicator() {
  return (
    <div className="typing-row">

      <img
        src={ai}
        alt="AI"
        className="typing-avatar"
      />

      <div className="typing-bubble">

        <span></span>
        <span></span>
        <span></span>

      </div>

    </div>
  );
}

export default TypingIndicator;