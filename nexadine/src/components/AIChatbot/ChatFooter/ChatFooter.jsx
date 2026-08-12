import "./ChatFooter.css";

function ChatFooter({
  message,
  setMessage,
  sendMessage,
  loading,
}) {
  return (
    <div className="chat-footer">
      <input
        type="text"
        placeholder="Ask anything about GRAND NexaDine..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button
        onClick={() => sendMessage()}
        disabled={loading || !message.trim()}
      >
        ➤
      </button>
    </div>
  );
}

export default ChatFooter;