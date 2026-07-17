"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Machine } from "@/context/MachineContext";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (machine: {
    name: string;
    manufacturer: string;
    model: string;
    serial_number: string;
    location: string;
    manual: string;
  }) => Promise<void>;
  machine?: Machine | null;
}

export default function AddMachineModal({
  open,
  onClose,
  onSave,
  machine,
}: Props) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [location, setLocation] = useState("");
  const [manual, setManual] = useState("");

  useEffect(() => {
    if (machine) {
      setName(machine.name);
      setManufacturer(machine.manufacturer);
      setModel(machine.model);
      setSerialNumber(machine.serial_number);
      setLocation(machine.location);
      setManual(machine.manual);
    } else {
      setName("");
      setManufacturer("");
      setModel("");
      setSerialNumber("");
      setLocation("");
      setManual("");
    }
  }, [machine, open]);

  if (!open) return null;

  async function saveMachine() {
    if (
      !name ||
      !manufacturer ||
      !model ||
      !serialNumber ||
      !location
    ) {
      alert("Please fill all fields.");
      return;
    }

    await onSave({
      name,
      manufacturer,
      model,
      serial_number: serialNumber,
      location,
      manual,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-900 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            {machine ? "Edit Machine" : "Add Machine"}
          </h2>

          <button onClick={onClose}>
            <X className="text-slate-400 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <input
            placeholder="Machine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl bg-slate-800 p-4"
          />

          <input
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="rounded-xl bg-slate-800 p-4"
          />

          <input
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="rounded-xl bg-slate-800 p-4"
          />

          <input
            placeholder="Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            className="rounded-xl bg-slate-800 p-4"
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-xl bg-slate-800 p-4"
          />

          <input
            placeholder="Manual Filename"
            value={manual}
            onChange={(e) => setManual(e.target.value)}
            className="col-span-2 rounded-xl bg-slate-800 p-4"
          />
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-700 px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={saveMachine}
            className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500"
          >
            {machine ? "Update Machine" : "Save Machine"}
          </button>
        </div>
      </div>
    </div>
  );
}