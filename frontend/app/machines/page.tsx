"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MachineHeader from "@/components/machines/MachineHeader";
import MachineGrid from "@/components/machines/MachineGrid";
import AddMachineModal from "@/components/machines/AddMachineModal";

import { Machine, useMachines } from "@/context/MachineContext";

export default function MachinesPage() {
  const {
    machines,
    addMachine,
    editMachine,
    removeMachine,
  } = useMachines();

  const [openModal, setOpenModal] = useState(false);
  const [editingMachine, setEditingMachine] = useState<Machine | null>(null);

  async function handleSaveMachine(machine: {
    name: string;
    manufacturer: string;
    model: string;
    serial_number: string;
    location: string;
    manual: string;
  }) {
    if (editingMachine) {
      await editMachine(editingMachine.id, machine);
    } else {
      if (machines.length >= 50) {
        alert("Maximum of 50 machines reached.");
        return;
      }

      await addMachine(machine);
    }

    setEditingMachine(null);
    setOpenModal(false);
  }

  async function handleDeleteMachine(id: number) {
    await removeMachine(id);
  }

  function handleEditMachine(machine: Machine) {
    setEditingMachine(machine);
    setOpenModal(true);
  }

  function handleCloseModal() {
    setEditingMachine(null);
    setOpenModal(false);
  }

  return (
    <DashboardLayout>
      <MachineHeader
        machineCount={machines.length}
        onAddMachine={() => {
          setEditingMachine(null);
          setOpenModal(true);
        }}
      />

      <MachineGrid
        machines={machines}
        onDelete={handleDeleteMachine}
        onEdit={handleEditMachine}
      />

      <AddMachineModal
        open={openModal}
        onClose={handleCloseModal}
        onSave={handleSaveMachine}
        machine={editingMachine}
      />
    </DashboardLayout>
  );
}