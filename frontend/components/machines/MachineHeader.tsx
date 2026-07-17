"use client";

import { Plus } from "lucide-react";

interface MachineHeaderProps {
  machineCount: number;
  onAddMachine: () => void;
}

export default function MachineHeader({
  machineCount,
  onAddMachine,
}: MachineHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Machines
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all industrial equipment connected to MaintenAI.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Machines
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {machineCount} / 50
          </p>
        </div>

        <button
          onClick={onAddMachine}
          disabled={machineCount >= 50}
          className={`flex items-center gap-2 rounded-xl px-6 py-4 font-semibold transition-all ${
            machineCount >= 50
              ? "cursor-not-allowed bg-slate-700 text-slate-500"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          <Plus size={20} />
          Add Machine
        </button>
      </div>
    </div>
  );
}