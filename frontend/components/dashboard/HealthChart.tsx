"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";

import { useDashboard } from "@/hooks/useDashboard";

export default function HealthChart() {
  const { chartData, stats } = useDashboard();

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Machine Health
          </h2>

          <p className="text-slate-400">
            Live Machine Health Scores
          </p>
        </div>

        <div className="rounded-xl bg-blue-500/20 px-4 py-2 font-semibold text-blue-400">
          Avg: {stats.averageHealth}%
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="name"
              stroke="#94a3b8"
            />

            <YAxis
              domain={[0, 100]}
              stroke="#94a3b8"
            />

            <Tooltip />

            <Bar
              dataKey="health"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}