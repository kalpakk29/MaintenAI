"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Machine } from "@/context/MachineContext";

interface Props {
  machine: Machine;
  onDelete: (id: number) => void;
  onEdit: (machine: Machine) => void;
}

export default function MachineCard({
  machine,
  onDelete,
  onEdit,
}: Props) {

  function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
      case "healthy":
        return "text-green-400";

      case "warning":
        return "text-yellow-400";

      case "critical":
        return "text-red-400";

      default:
        return "text-slate-400";
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            {machine.name}
          </h2>

          <p className="text-slate-400">
            {machine.manufacturer}
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() => onEdit(machine)}
            className="text-blue-400 hover:text-blue-500"
          >
            <Pencil size={20} />
          </button>

          <button
            onClick={() => onDelete(machine.id)}
            className="text-red-400 hover:text-red-500"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>

      <div className="mt-6 space-y-3">

        <p>
          <span className="text-slate-500">
            Model:
          </span>{" "}
          {machine.model}
        </p>

        <p>
          <span className="text-slate-500">
            Serial:
          </span>{" "}
          {machine.serial_number}
        </p>

        <p>
          <span className="text-slate-500">
            Location:
          </span>{" "}
          {machine.location}
        </p>

        <p>
          <span className="text-slate-500">
            Manual:
          </span>{" "}
          {machine.manual}
        </p>

        <hr className="border-slate-700" />

        <p>
          <span className="text-slate-500">
            AI Status:
          </span>{" "}
          <span className={getStatusColor(machine.ai_status)}>
            {machine.ai_status}
          </span>
        </p>

        <p>
          <span className="text-slate-500">
            Health Score:
          </span>{" "}
          {machine.health_score}%
        </p>

        <p>
          <span className="text-slate-500">
            Diagnosis:
          </span>{" "}
          {machine.diagnosis || "No diagnosis available"}
        </p>

        <p>
          <span className="text-slate-500">
            Recommendation:
          </span>{" "}
          {machine.recommendation || "No recommendation available"}
        </p>

      </div>

    </div>
  );
}