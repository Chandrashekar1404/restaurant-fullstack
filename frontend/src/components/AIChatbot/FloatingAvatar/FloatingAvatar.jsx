import "./FloatingAvatar.css";
import ai from "../../../assets/ai.png";

function FloatingAvatar({ onClick }) {
  return (
    <div className="floating-avatar">
      <div className="help-bubble">
        👋 Hi! Can I help you?
      </div>

      <button className="avatar-btn" onClick={onClick}>
        <img src={ai} alt="NexaDine AI" />
      </button>
    </div>
  );
}

export default FloatingAvatar;