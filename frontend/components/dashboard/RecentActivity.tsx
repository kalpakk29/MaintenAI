"use client";

import { useDashboard } from "@/hooks/useDashboard";

export default function RecentActivity() {
  const { tableData } = useDashboard();

  const activity = [];

  if (tableData.length > 0) {
    activity.push(`📦 ${tableData.length} machine(s) registered`);

    tableData.forEach((machine) => {
      activity.push(
        `🤖 AI analyzed ${machine.name} (${machine.ai_status})`
      );

      if (machine.manual) {
        activity.push(
          `📄 Manual assigned to ${machine.name}`
        );
      }
    });
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.length === 0 ? (
          <div className="rounded-xl bg-slate-800 p-4 text-slate-400">
            No activity available.
          </div>
        ) : (
          activity.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
            >
              {item}
            </div>
          ))
        )}

      </div>
    </div>
  );
}