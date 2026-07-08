import { TriangleAlert } from "lucide-react";

const alerts = [
  {
    machine: "Hydraulic Pump",
    level: "Critical",
    color: "text-red-400",
  },
  {
    machine: "Conveyor Belt",
    level: "Warning",
    color: "text-yellow-400",
  },
  {
    machine: "CNC Machine #12",
    level: "Healthy",
    color: "text-green-400",
  },
];

export default function Alerts() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <TriangleAlert className="text-red-400" />

        <h2 className="text-xl font-bold">
          Live Alerts
        </h2>

      </div>

      <div className="space-y-4">

        {alerts.map((alert) => (
          <div
            key={alert.machine}
            className="rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
          >

            <p className="font-semibold text-white">
              {alert.machine}
            </p>

            <p className={`mt-2 ${alert.color}`}>
              {alert.level}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}