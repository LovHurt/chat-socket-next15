"use client";
import React, { useState } from "react";

const ChatForm = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mat-4">
      <input
        type="text"
        placeholder="Type your message here..."
        className="flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
