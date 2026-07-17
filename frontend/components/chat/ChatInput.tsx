"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (question: string) => void;
}

export default function ChatInput({ onSend }: Props) {

  const [question, setQuestion] = useState("");

  function send() {
    if (!question.trim()) return;

    onSend(question);

    setQuestion("");
  }

  return (
    <div className="flex gap-4 border-t border-slate-800 p-6">

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-blue-500"
        placeholder="Ask about a machine or maintenance manual..."
      />

      <button
        onClick={send}
        className="rounded-xl bg-blue-600 px-6 hover:bg-blue-500"
      >
        <Send />
      </button>

    </div>
  );
}