"use client";

import { TriangleAlert } from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";

export default function Alerts() {
  const { alerts } = useDashboard();

  function getColor(status: string) {
    switch (status.toLowerCase()) {
      case "critical":
        return "text-red-400";

      case "warning":
        return "text-yellow-400";

      default:
        return "text-green-400";
    }
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <TriangleAlert className="text-red-400" />

        <h2 className="text-xl font-bold">
          Live Alerts
        </h2>

      </div>

      <div className="space-y-4">

        {alerts.length === 0 ? (
          <div className="rounded-xl bg-slate-800 p-4 text-slate-400">
            No active alerts.
          </div>
        ) : (
          alerts.map((machine) => (
            <div
              key={machine.id}
              className="rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
            >

              <p className="font-semibold text-white">
                {machine.name}
              </p>

              <p className={`mt-2 font-semibold ${getColor(machine.ai_status)}`}>
                {machine.ai_status}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Health Score: {machine.health_score}%
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}