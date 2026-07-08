"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", health: 72 },
  { day: "Tue", health: 76 },
  { day: "Wed", health: 79 },
  { day: "Thu", health: 75 },
  { day: "Fri", health: 85 },
  { day: "Sat", health: 91 },
  { day: "Sun", health: 97 },
];

export default function HealthChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Machine Health
          </h2>

          <p className="text-slate-400">
            AI Predicted Health Trend
          </p>
        </div>

        <div className="rounded-xl bg-green-500/20 px-4 py-2 font-semibold text-green-400">
          +12%
        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">

                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="health"
              stroke="#3B82F6"
              strokeWidth={4}
              fill="url(#healthGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}