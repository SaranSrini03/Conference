"use client";
import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { findAnswer } from "@/utils/Bot";

const BotPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    const userMessage = { text: message, type: "user" };
    const botMessage = { text: findAnswer(message), type: "bot" };
    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setMessage("");
  };

  return (
    <div className="relative h-screen w-screen">
      <iframe
        src="https://my.spline.design/liquidspiral-17469e59cff3eb0e9a8344531b861aa3/"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
      />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-5/6 m-4 sm:m-10 h-1/2 sm:h-2/3 bg-transparent p-4 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-2 overflow-y-auto p-2 sm:p-10 scrollbar-hide h-full">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`w-full flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-2 rounded-md ${
                  msg.type === "user"
                    ? "bg-green-500 text-white text-right"
                    : "bg-blue-600 text-white text-left"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md px-4">
        <div className="flex gap-3 bg-gray-800 bg-opacity-75 p-3 rounded-lg shadow-md">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type |help| for keywords"
            className="w-full p-2 text-white bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-opacity-70 cursor-pointer font-black text-black bg-white p-3 flex justify-center items-center gap-3 rounded-md hover:bg-green-500 hover:text-white"
          >
            Send
            <FaRocket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotPage;
