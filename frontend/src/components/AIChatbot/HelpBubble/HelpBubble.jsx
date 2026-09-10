import "./HelpBubble.css";

function HelpBubble({ isOpen }) {
  if (isOpen) return null;

  return (
    <div className="help-bubble">
      <span>👋 Hi! Can I help you?</span>
    </div>
  );
}

export default HelpBubble;