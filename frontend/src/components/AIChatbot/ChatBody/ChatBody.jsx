import "./ChatBody.css";
import ai from "../../../assets/ai.png";

function ChatBody({
  messages,
  loading,
  chatEndRef,
}) {
  return (
    <div className="chat-body">

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`chat-row ${msg.sender}`}
        >

          {msg.sender === "bot" && (
            <img
              src={ai}
              alt="AI"
              className="message-avatar"
            />
          )}

          <div
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>

        </div>

      ))}

      {loading && (

        <div className="chat-row bot">

          <img
            src={ai}
            alt="AI"
            className="message-avatar"
          />

          <div className="message bot typing">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      )}

      <div ref={chatEndRef}></div>

    </div>
  );
}

export default ChatBody;