"use client";

import MachineCard from "./MachineCard";
import { Machine } from "@/context/MachineContext";

interface Props {
  machines: Machine[];
  onDelete: (id: number) => void;
  onEdit: (machine: Machine) => void;
}

export default function MachineGrid({
  machines,
  onDelete,
  onEdit,
}: Props) {
  if (machines.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 p-20 text-center">
        <h2 className="text-2xl text-white">No Machines Added</h2>

        <p className="mt-4 text-slate-400">
          Click "Add Machine" to create your first machine.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {machines.map((machine) => (
        <MachineCard
          key={machine.id}
          machine={machine}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}