"use client";

import Message from "./Message";
import ChatInput from "./ChatInput";
import UploadManual from "./UploadManual";

const messages = [
  {
    role: "assistant",
    content:
      "Hello! I'm MaintenAI. Upload a maintenance manual or ask me a question about your industrial equipment.",
  },
  {
    role: "user",
    content:
      "Why is the hydraulic pump overheating?",
  },
  {
    role: "assistant",
    content:
      "Possible causes include insufficient lubrication, clogged filters, excessive load, or restricted coolant flow. Once you upload the maintenance manual, I'll answer using the manufacturer's instructions.",
  },
];

export default function ChatWindow() {
  return (
    <div className="flex h-[80vh] flex-col rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

      {/* Header */}
      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-white">
          AI Maintenance Copilot
        </h1>

        <p className="mt-2 text-slate-400">
          Chat with maintenance manuals using AI.
        </p>

      </div>

      {/* Upload */}
      <div className="border-b border-slate-800 p-6">
        <UploadManual />
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto p-6">

        {messages.map((message, index) => (
          <Message
            key={index}
            role={message.role as "user" | "assistant"}
            content={message.content}
          />
        ))}

      </div>

      {/* Input */}
      <ChatInput />

    </div>
  );
}