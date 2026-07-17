"use client";

import { useMachines } from "@/context/MachineContext";

export function useDashboard() {
  const { machines } = useMachines();

  const totalMachines = machines.length;

  const healthyMachines = machines.filter(
    (m) => m.ai_status.toLowerCase() === "healthy"
  );

  const warningMachines = machines.filter(
    (m) => m.ai_status.toLowerCase() === "warning"
  );

  const criticalMachines = machines.filter(
    (m) => m.ai_status.toLowerCase() === "critical"
  );

  const averageHealth =
    totalMachines === 0
      ? 0
      : Math.round(
          machines.reduce(
            (sum, machine) => sum + machine.health_score,
            0
          ) / totalMachines
        );

  const stats = {
    total: totalMachines,
    healthy: healthyMachines.length,
    warning: warningMachines.length,
    critical: criticalMachines.length,
    averageHealth,
  };

  const tableData = machines;

  const alerts = machines.filter(
    (m) =>
      m.ai_status.toLowerCase() === "warning" ||
      m.ai_status.toLowerCase() === "critical"
  );

  const chartData = machines.map((m) => ({
    name: m.name,
    health: m.health_score,
  }));

  return {
    stats,
    tableData,
    alerts,
    chartData,
  };
}