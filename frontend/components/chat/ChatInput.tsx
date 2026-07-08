"use client";

import { Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex gap-4 border-t border-slate-800 p-6">

      <input
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-blue-500"
        placeholder="Ask about a machine or maintenance manual..."
      />

      <button className="rounded-xl bg-blue-600 px-6 hover:bg-blue-500">
        <Send />
      </button>

    </div>
  );
}
