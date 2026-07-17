"use client";

import {
  Cpu,
  ShieldCheck,
  TriangleAlert,
  Activity,
} from "lucide-react";

import { useDashboard } from "@/hooks/useDashboard";

export default function StatsCards() {
  const { stats } = useDashboard();

  const cards = [
    {
      title: "Total Machines",
      value: stats.total,
      icon: Cpu,
      color: "text-blue-400",
    },
    {
      title: "Healthy",
      value: stats.healthy,
      icon: ShieldCheck,
      color: "text-green-400",
    },
    {
      title: "Warning",
      value: stats.warning,
      icon: Activity,
      color: "text-yellow-400",
    },
    {
      title: "Critical",
      value: stats.critical,
      icon: TriangleAlert,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2
                  className={`mt-3 text-4xl font-black ${card.color}`}
                >
                  {card.value}
                </h2>
              </div>

              <Icon
                size={34}
                className={card.color}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}