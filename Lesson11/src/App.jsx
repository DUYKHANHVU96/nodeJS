import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY_GEMINI } from "./key";

// Khởi tạo model
const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function App() {
  const [messages, setMessages] = useState([]); // lưu các prompt + response
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Kiểm tra API key
      if (API_KEY_GEMINI === "YOUR_API_KEY") {
        throw new Error("Vui lòng cập nhật API key trong file key.js");
      }

      const result = await model.generateContent(input);
      const text = await result.response.text();
      const botMessage = { sender: "bot", text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Lỗi:", err);
      const errorMessage = err.message === "Vui lòng cập nhật API key trong file key.js" 
        ? "❌ " + err.message
        : "❌ Đã có lỗi xảy ra. Vui lòng kiểm tra API key và thử lại.";
      
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: errorMessage },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <h1>💬 Gemini Chat</h1>
      <div className="chat-box">
        {messages.length === 0 && (
          <div className="message bot">
            <strong>🤖 Gemini:</strong> Xin chào! Tôi là Gemini, trợ lý AI của Google. Bạn có thể hỏi tôi bất cứ điều gì!
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <strong>{msg.sender === "user" ? "🧑‍💻 Bạn:" : "🤖 Gemini:"}</strong>{" "}
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <strong>🤖 Gemini:</strong> Đang trả lời...
          </div>
        )}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Nhập câu hỏi..."
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          {loading ? "Đang gửi..." : "Gửi"}
        </button>
      </div>
    </div>
  );
}

export default App;
