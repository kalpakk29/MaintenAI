"use client";

import { useState } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";
import UploadManual from "./UploadManual";

import { useMachines } from "@/context/MachineContext";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AIAnalysis {
  status: string;
  health_score: number;
  diagnosis: string;
  recommendation: string;
}

export default function ChatWindow() {
  const { machines, refreshMachines } = useMachines();

  const [selectedMachine, setSelectedMachine] = useState<number>(0);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! Select a machine, upload its manual and ask me anything.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);

  async function sendMessage(question: string) {
    if (!question.trim()) return;

    if (selectedMachine === 0) {
      alert("Please select a machine first.");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setLoading(true);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/chat?machine_id=${selectedMachine}&question=${encodeURIComponent(
          question
        )}`
      );

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);

      setAnalysis({
        status: data.status,
        health_score: data.health_score,
        diagnosis: data.diagnosis,
        recommendation: data.recommendation,
      });

      await refreshMachines();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content: "Conversation cleared.",
      },
    ]);

    setAnalysis(null);
  }

  return (
    <div className="flex h-[80vh] flex-col rounded-3xl border border-slate-800 bg-slate-900">

      {/* Header */}

      <div className="border-b border-slate-800 p-6">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-white">
              AI Maintenance Copilot
            </h1>

            <p className="mt-2 text-slate-400">
              Chat with maintenance manuals using AI.
            </p>
          </div>

          <div className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
            ● AI Online
          </div>

        </div>
      </div>

{/* Upload + Machine */}

<div className="border-b border-slate-800 p-6">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

    <div className="flex">
      <UploadManual />
    </div>

    <div className="flex">
      <select
        value={selectedMachine}
        onChange={(e) =>
          setSelectedMachine(Number(e.target.value))
        }
        className="h-[70px] w-full rounded-xl border border-slate-700 bg-slate-800 px-5 text-white transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
      >
        <option value={0}>Select Machine</option>

        {machines.map((machine) => (
          <option
            key={machine.id}
            value={machine.id}
          >
            {machine.name}
          </option>
        ))}
      </select>
    </div>

  </div>
</div>

      {/* AI Analysis */}

      {analysis && (
        <div className="border-b border-slate-800 bg-slate-950 p-5">

          <h2 className="mb-4 text-xl font-bold">
            Latest AI Analysis
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <p className="text-slate-400">Status</p>
              <p className="font-bold text-green-400">
                {analysis.status}
              </p>
            </div>

            <div>
              <p className="text-slate-400">Health Score</p>
              <p>{analysis.health_score}%</p>
            </div>

            <div className="col-span-2">
              <p className="text-slate-400">Diagnosis</p>
              <p>{analysis.diagnosis}</p>
            </div>

            <div className="col-span-2">
              <p className="text-slate-400">Recommendation</p>
              <p>{analysis.recommendation}</p>
            </div>

          </div>

        </div>
      )}

      {/* Chat */}

      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.map((message, index) => (
          <Message
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}

        {loading && (
          <Message
            role="assistant"
            content="MaintenAI is analyzing..."
          />
        )}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-4">

        <div className="mb-4 flex justify-end">
          <button
            onClick={clearChat}
            className="rounded-xl bg-red-600 px-5 py-2 hover:bg-red-500"
          >
            Clear Chat
          </button>
        </div>

        <ChatInput onSend={sendMessage} />

      </div>

    </div>
  );
}