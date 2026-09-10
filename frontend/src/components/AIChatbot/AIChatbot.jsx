import { useState, useRef, useEffect } from "react";
import "./AIChatbot.css";

import FloatingAvatar from "./FloatingAvatar/FloatingAvatar";
import HelpBubble from "./HelpBubble/HelpBubble";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import QuickQuestions from "./QuickQuestions/QuickQuestions";
import ChatFooter from "./ChatFooter/ChatFooter";
import TypingIndicator from "./TypingIndicator/TypingIndicator";

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to GRAND NexaDine! I'm your AI Assistant. How can I help you today?",
    },
  ]);

  const chatEndRef = useRef(null);

  const quickQuestions = [
    "🍽️ Show Menu",
    "📅 Book a Table",
    "🎉 Today's Offers",
    "📍 Restaurant Location",
    "🕒 Opening Hours",
    "📦 Track My Order",
    "💳 Payment Methods",
    "⭐ Popular Dishes",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const askQuestion = (text) => {
    sendMessage(text);
  };

  const sendMessage = async (customMessage) => {
    const userMessage = customMessage || message;

    if (!userMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Sorry, I couldn't understand.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to AI server.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <>
          <HelpBubble isOpen={isOpen} />
          <FloatingAvatar onClick={() => setIsOpen(true)} />
        </>
      )}

      {isOpen && (
        <div className="chatbot-container">

          <ChatHeader onClose={() => setIsOpen(false)} />

          <QuickQuestions
            questions={quickQuestions}
            onQuestionClick={askQuestion}
          />

          <ChatBody
            messages={messages}
            chatEndRef={chatEndRef}
          />

          {loading && <TypingIndicator />}

          <ChatFooter
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            loading={loading}
          />

        </div>
      )}
    </>
  );
}

export default AIChatbot;