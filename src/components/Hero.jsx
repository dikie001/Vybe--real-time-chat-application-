import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const Hero = () => {
  const [text, setText] = useState("");
  const [tab, setTab] = useState("");
  const [isOpen, setOpen] = useState(false); // Fixed: should be a boolean, not a string
  const [messages, setMessages] = useState(["hello"]);
  const [input, setInput] = useState("");

  const sendText = () => {
    if (input.trim() === "") {
      toast.error("Message cannot be empty!");
      return;
    }

    setTab(text);
    setOpen(true);

    // Append new message to the state correctly
    setMessages((prevMessages) => [...prevMessages, { text: input, sender: "me" }]);

    // Clear input field
    setInput("");
  };

  return (

    <div className="sm:w-full md:mr-2 h-screen md:h-100 relative md:border-2 m-2 p-2 rounded-md shadow-md shadow-purple-500 border-cyan-600 z-0 flex items-center md:w-200 md:flex md:justify-center md:items-center md:shadow-md md:shadow-purple-500">
      {/* Toast Notifications */}
      <div className="z-[9999] fixed">
        <Toaster reverseOrder={false} position="top-right" />
      </div>

      {/* Chat Messages */}
      <div>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-lg shadow-md ${
                msg.sender === "me"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-gray-500 text-cyan-500 rounded-bl-none"
              }`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray font-semibold">No messages yet...</p>
        )}
      </div>

      {/* Input Field & Send Button */}
      <div className="border-2 border-purple-600 flex justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 outline-none text-white px-2 border-cyan-600 rounded-xl py-1 text-xl bottom-2 absolute left-2"
        />
        <button onClick={sendText} className="rounded-full absolute bottom-3 right-38">
          <IoSend className="text-purple-500 hover:text-cyan-500" size={32} />
        </button>
      </div>
    </div>
  
  );
};

export default Hero;
