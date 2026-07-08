import { Bot } from "lucide-react";

export default function AIChatCard() {
  return (
    <div className="rounded-3xl border border-blue-500/20 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <Bot className="text-blue-500" />

        <h2 className="text-xl font-bold">
          AI Copilot
        </h2>

      </div>

      <div className="rounded-xl bg-slate-800 p-4">

        <p className="text-slate-300">
          Bearing vibration has increased by
          18% over the last 24 hours.
        </p>

        <p className="mt-4 text-blue-400">
          Recommendation:
        </p>

        <p className="mt-2 text-slate-400">
          Schedule preventive maintenance
          within the next 48 hours.
        </p>

      </div>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
        Open AI Assistant
      </button>

    </div>
  );
}