const activity = [
  "AI generated maintenance report",
  "Manual uploaded successfully",
  "Pump #4 exceeded vibration threshold",
  "Maintenance task completed",
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-800 p-4"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}