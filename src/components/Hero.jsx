import React, { useState } from "react";
import { IoSend, IoChatbubblesSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! How’s it going?", sender: "other" },
    { text: "All good! You?", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") {
      toast.error("Type a message first!");
      return;
    }

    setMessages([...messages, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-lg  mx-auto border-2 border-cyan-500 shadow-md shadow-purple-800 rounded-lg  text-white">
      {/* Top Profile Bar */}
      <div className="flex items-center p-4 border-b border-gray-700">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="User"
          className="w-10 h-10 rounded-full mr-3"
        />
        <h2 className="text-lg font-semibold">John Doe</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-700 text-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-t-gray-700 flex items-center">
        <BsEmojiSmile className="text-gray-400 text-xl cursor-pointer mx-2" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border-2 border-purple-600 shadow-sm shadow-cyan-700 text-white px-3 py-2 rounded-full outline-none"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="ml-2">
          <IoSend className="text-blue-500 text-2xl" />
        </button>
      </div>

      {/* Floating New Chat Button */}
   

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
};

export default ChatApp;
